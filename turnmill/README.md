# TURN·MILL PRO — CK52PT-Y

A standalone, installable prototype at `/turnmill/`, without replacing the original CNC Machinist code or its CAD WASM assets.

## Included
- Responsive dark/light UI, fixed bottom navigation
- Turning X/Z diameter contour editor and 2D geometry preview with local save and JSON export
- Cutting-speed, spindle RPM and feed calculations (G95)
- Face-hole polar coordinate calculator (U/V only, **not machine X/Y/C**)
- 15-tool local turret library
- Links back to original CNC Machinist CAD, tolerances and engineering utilities
- Offline app shell via service worker

## Safety limits
Geometry preview is **not** NC simulation, collision detection, verified machining, or a ShopTurn postprocessor. Actual spindle capability, tool offsets, clamping, C-axis availability and safety limits must be verified against the machine. The example tool mapping is fictitious.

## GitHub reconnaissance
Evaluated [occt-import-js](https://github.com/kovacsv/occt-import-js), [cad-3d-viewer](https://github.com/tegos/cad-3d-viewer), [CNC Simulator](https://github.com/ismael-figueiredo/cnc-simulator) and [OneManLabs/cam](https://github.com/OneManLabs/cam). Existing Aaa1 already includes locally bundled OCCT WASM. No borrowed code or additional dependencies have been introduced.

## Running
Serve the repository from an HTTP server and open `/turnmill/`; if GitHub Pages serves from main, merge this branch to publish.
