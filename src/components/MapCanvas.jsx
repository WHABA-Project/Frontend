// components/MapCanvas.jsx
import React, { useEffect, useRef } from "react";

const MapCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let regions = [];

    fetch("/asset/SIDO_MAP_2022.json")
      .then((res) => res.json())
      .then((json) => {
        let minLon = 180,
          maxLon = -180;
        let minLat = 90,
          maxLat = -90;

        json.features.forEach((feat) => {
          const geom = feat.geometry;
          const polys =
            geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;

          polys.forEach((polygon) => {
            polygon.forEach((ring) => {
              ring.forEach(([lon, lat]) => {
                minLon = Math.min(minLon, lon);
                maxLon = Math.max(maxLon, lon);
                minLat = Math.min(minLat, lat);
                maxLat = Math.max(maxLat, lat);
              });
            });
          });
        });

        const padding = 20;
        const mapW = canvas.width - padding * 2;
        const mapH = canvas.height - padding * 2;
        const scaleX = mapW / (maxLon - minLon);
        const scaleY = mapH / (maxLat - minLat);
        const scale = Math.min(scaleX, scaleY);
        const offsetX = padding - minLon * scale;
        const offsetY = padding + maxLat * scale;

        function project([lon, lat]) {
          return {
            x: lon * scale + offsetX,
            y: offsetY - lat * scale,
          };
        }

        const keyKor = "CTP_KOR_NM";
        regions = json.features.map((feat) => {
          const name = feat.properties[keyKor];
          const geom = feat.geometry;
          const polys =
            geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;

          const paths = [];
          polys.forEach((polygon) => {
            polygon.forEach((ring) => {
              const p = new Path2D();
              ring.forEach(([lon, lat], i) => {
                const { x, y } = project([lon, lat]);
                i === 0 ? p.moveTo(x, y) : p.lineTo(x, y);
              });
              p.closePath();
              paths.push(p);
            });
          });

          return { name, paths };
        });

        function drawRegions(hoveredName) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          regions.forEach((region) => {
            const isHover = region.name === hoveredName;
            ctx.fillStyle = isHover
              ? "rgba(255,165,0,0.6)"
              : "rgba(200,200,200,0.5)";
            ctx.strokeStyle = isHover ? "#f60" : "#999";

            region.paths.forEach((path) => {
              ctx.fill(path);
              ctx.stroke(path);
            });
          });
        }

        drawRegions(null);

        canvas.addEventListener("mousemove", (e) => {
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          let hoverName = null;
          for (const region of regions) {
            if (region.paths.some((path) => ctx.isPointInPath(path, x, y))) {
              hoverName = region.name;
              break;
            }
          }
          drawRegions(hoverName);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{
        border: "1px solid #ccc",
        display: "block",
        margin: "40px auto",
        cursor: "pointer",
      }}
    />
  );
};

export default MapCanvas;
