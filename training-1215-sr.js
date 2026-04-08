const TRAINING_SR_12_15 = {
  tips: [
    {
      title: "Cube Gluing Formula",
      content: "When unit cubes are glued face-to-face in a straight row, each joint hides 2 faces (one from each cube). For n cubes in a row: visible faces = 6n − 2(n−1) = 4n + 2. For any tree-shaped arrangement (no loops), count the joints j and use: visible = 6n − 2j."
    },
    {
      title: "Painted Cube Strategy",
      content: "For an n×n×n painted cube cut into unit cubes: corner cubes (3 painted faces) = 8, edge cubes (2 painted faces) = 12(n−2), face-center cubes (1 painted face) = 6(n−2)², interior cubes (0 painted faces) = (n−2)³. Always verify that all categories sum to n³."
    },
    {
      title: "Euler's Formula for Polyhedra",
      content: "For any convex polyhedron: V − E + F = 2, where V = vertices, E = edges, F = faces. Use this to find a missing value when two are known. Key solids: Cube (8,12,6), Octahedron (6,12,8), Dodecahedron (20,30,12), Icosahedron (12,30,20)."
    },
    {
      title: "Cross-Section Visualization",
      content: "Imagine slicing a 3D solid with a flat plane. A cut parallel to a base gives a similar (smaller) shape. Perpendicular cuts through symmetric axes reveal the internal profile. A sphere always gives a circle. A cone can give a circle, ellipse, parabola, or hyperbola depending on the cutting angle."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Basic cube properties, face counting for glued cubes, and 2×2×2 painted cube problems.",
      exercises: [
        {
          id: "TSR1215_1_01",
          question: "If two unit cubes are glued face-to-face, how many faces are visible on the combined shape?",
          hint: "Each cube has 6 faces. Two faces are hidden at the joint.",
          options: ["10", "12", "8", "11"],
          correct: 0,
          explanation: "2 × 6 = 12 total faces. The glued joint hides 2 faces (one from each cube). 12 − 2 = 10."
        },
        {
          id: "TSR1215_1_02",
          question: "Three unit cubes are glued in a straight row. How many faces are visible?",
          hint: "There are 2 joints, each hiding 2 faces.",
          options: ["14", "16", "12", "15"],
          correct: 0,
          explanation: "3 × 6 = 18 total faces. 2 joints × 2 hidden = 4 hidden. 18 − 4 = 14."
        },
        {
          id: "TSR1215_1_03",
          question: "Four unit cubes are glued in a straight row. How many faces are visible?",
          hint: "There are 3 joints between 4 cubes.",
          options: ["18", "20", "16", "22"],
          correct: 0,
          explanation: "4 × 6 = 24 total faces. 3 joints × 2 = 6 hidden. 24 − 6 = 18."
        },
        {
          id: "TSR1215_1_04",
          question: "How many faces does a cube have?",
          hint: "Think of a die — count all the flat surfaces.",
          options: ["6", "8", "4", "12"],
          correct: 0,
          explanation: "A cube has 6 faces: top, bottom, front, back, left, and right."
        },
        {
          id: "TSR1215_1_05",
          question: "How many edges does a cube have?",
          hint: "Count the lines where two faces meet.",
          options: ["12", "8", "6", "10"],
          correct: 0,
          explanation: "A cube has 12 edges: 4 on top, 4 on bottom, and 4 vertical edges connecting them."
        },
        {
          id: "TSR1215_1_06",
          question: "How many vertices (corners) does a cube have?",
          hint: "Count the points where three edges meet.",
          options: ["8", "6", "12", "10"],
          correct: 0,
          explanation: "A cube has 8 vertices: 4 on the top face and 4 on the bottom face."
        },
        {
          id: "TSR1215_1_07",
          question: "How many small unit cubes make up a 2×2×2 cube?",
          hint: "Multiply the three dimensions together.",
          options: ["8", "6", "4", "12"],
          correct: 0,
          explanation: "2 × 2 × 2 = 8 unit cubes."
        },
        {
          id: "TSR1215_1_08",
          question: "A 2×2×2 cube is painted on all outer faces, then cut into unit cubes. How many small cubes have exactly 3 painted faces?",
          hint: "In a 2×2×2 cube, every small cube sits at a corner.",
          options: ["8", "4", "6", "0"],
          correct: 0,
          explanation: "All 8 small cubes in a 2×2×2 are corner cubes, so every one has exactly 3 painted faces."
        },
        {
          id: "TSR1215_1_09",
          question: "A 2×2×2 cube is painted on all outer faces, then cut into unit cubes. How many small cubes have exactly 2 painted faces?",
          hint: "Edge-only cubes have exactly 2 painted faces. Are there any in a 2×2×2?",
          options: ["0", "4", "8", "12"],
          correct: 0,
          explanation: "In a 2×2×2 cube, every small cube is a corner cube (3 painted faces). There are no edge-only positions, so 0 have exactly 2 painted faces."
        },
        {
          id: "TSR1215_1_10",
          question: "A 2×2×2 cube is painted on all outer faces, then cut into unit cubes. How many small cubes have 0 painted faces?",
          hint: "Are there any cubes completely hidden inside a 2×2×2?",
          options: ["0", "1", "2", "4"],
          correct: 0,
          explanation: "In a 2×2×2 cube, all 8 small cubes are on the surface. There is no interior, so 0 cubes have 0 painted faces."
        },
        {
          id: "TSR1215_1_11",
          question: "What is the surface area of a cube with side length 3 cm?",
          hint: "Surface area of a cube = 6 × side².",
          options: ["54 cm²", "36 cm²", "27 cm²", "48 cm²"],
          correct: 0,
          explanation: "6 × 3² = 6 × 9 = 54 cm²."
        },
        {
          id: "TSR1215_1_12",
          question: "What is the volume of a cube with side length 4 cm?",
          hint: "Volume of a cube = side³.",
          options: ["64 cm³", "48 cm³", "16 cm³", "96 cm³"],
          correct: 0,
          explanation: "4³ = 4 × 4 × 4 = 64 cm³."
        },
        {
          id: "TSR1215_1_13",
          question: "Five unit cubes are glued in a straight row. How many faces are visible?",
          hint: "For n cubes in a row: visible = 4n + 2.",
          options: ["22", "24", "20", "26"],
          correct: 0,
          explanation: "5 × 6 = 30 total. 4 joints × 2 = 8 hidden. 30 − 8 = 22. Or use 4(5) + 2 = 22."
        },
        {
          id: "TSR1215_1_14",
          question: "Four unit cubes are arranged in a 2×2 flat square (one layer). How many faces are visible?",
          hint: "In a 2×2 square, there are 4 face-to-face joints (2 horizontal + 2 vertical).",
          options: ["16", "18", "20", "14"],
          correct: 0,
          explanation: "4 × 6 = 24 total faces. 4 joints × 2 = 8 hidden. 24 − 8 = 16."
        },
        {
          id: "TSR1215_1_15",
          question: "If a cube has a total surface area of 150 cm², what is the area of one face?",
          hint: "A cube has 6 identical faces.",
          options: ["25 cm²", "30 cm²", "15 cm²", "50 cm²"],
          correct: 0,
          explanation: "150 ÷ 6 = 25 cm² per face."
        },
        {
          id: "TSR1215_1_16",
          question: "Eight unit cubes are assembled into a 2×2×2 cube. What is the total surface area of the assembled shape (in unit squares)?",
          hint: "The assembled cube has side length 2.",
          options: ["24", "48", "36", "16"],
          correct: 0,
          explanation: "The 2×2×2 cube has surface area 6 × 2² = 6 × 4 = 24 unit squares."
        },
        {
          id: "TSR1215_1_17",
          question: "On a standard die, opposite faces always sum to 7. If the top face shows 3, what number is on the bottom face?",
          hint: "7 minus the top value gives the bottom value.",
          options: ["4", "3", "6", "5"],
          correct: 0,
          explanation: "7 − 3 = 4."
        },
        {
          id: "TSR1215_1_18",
          question: "Euler's formula states V − E + F = 2 for any convex polyhedron. For a cube with V = 8, E = 12, F = 6, what is V − E + F?",
          hint: "Substitute the values directly.",
          options: ["2", "0", "4", "6"],
          correct: 0,
          explanation: "8 − 12 + 6 = 2, confirming Euler's formula."
        },
        {
          id: "TSR1215_1_19",
          question: "Six unit cubes are glued in a straight row. How many faces are visible?",
          hint: "6 cubes in a row have 5 joints.",
          options: ["26", "30", "24", "28"],
          correct: 0,
          explanation: "6 × 6 = 36 total. 5 joints × 2 = 10 hidden. 36 − 10 = 26. Or use 4(6) + 2 = 26."
        },
        {
          id: "TSR1215_1_20",
          question: "A cube has a surface area of 96 cm². What is the side length of the cube?",
          hint: "Surface area = 6s². Solve for s.",
          options: ["4 cm", "6 cm", "3 cm", "8 cm"],
          correct: 0,
          explanation: "6s² = 96 → s² = 16 → s = 4 cm."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "3×3×3 painted cube analysis, cube net folding, and cross-sections of common solids.",
      exercises: [
        {
          id: "TSR1215_2_01",
          question: "How many small unit cubes make up a 3×3×3 cube?",
          hint: "Multiply the three dimensions.",
          options: ["27", "24", "18", "9"],
          correct: 0,
          explanation: "3 × 3 × 3 = 27 unit cubes."
        },
        {
          id: "TSR1215_2_02",
          question: "A 3×3×3 cube is painted on all faces, then cut into unit cubes. How many small cubes have exactly 3 painted faces?",
          hint: "Which positions on a cube have 3 exposed faces?",
          options: ["8", "12", "6", "4"],
          correct: 0,
          explanation: "Only the 8 corner cubes have exactly 3 painted faces (one per corner of the big cube)."
        },
        {
          id: "TSR1215_2_03",
          question: "A 3×3×3 cube is painted on all faces, then cut into unit cubes. How many small cubes have exactly 2 painted faces?",
          hint: "These sit on the edges but not at the corners.",
          options: ["12", "8", "6", "24"],
          correct: 0,
          explanation: "Each of the 12 edges has one edge-middle cube (3 − 2 = 1 per edge). 12 × 1 = 12."
        },
        {
          id: "TSR1215_2_04",
          question: "A 3×3×3 cube is painted on all faces, then cut into unit cubes. How many small cubes have exactly 1 painted face?",
          hint: "These are the face-center cubes.",
          options: ["6", "12", "8", "1"],
          correct: 0,
          explanation: "Each of the 6 faces has one center cube ((3−2)² = 1 per face). 6 × 1 = 6."
        },
        {
          id: "TSR1215_2_05",
          question: "A 3×3×3 cube is painted on all faces, then cut into unit cubes. How many small cubes have 0 painted faces?",
          hint: "How many cubes are completely hidden inside?",
          options: ["1", "0", "6", "8"],
          correct: 0,
          explanation: "The interior is (3−2)³ = 1³ = 1 cube. Only the very center cube has no painted faces."
        },
        {
          id: "TSR1215_2_06",
          question: "How many distinct nets (flat unfolded patterns) can be folded into a cube?",
          hint: "This is a well-known combinatorial geometry result.",
          options: ["11", "6", "8", "10"],
          correct: 0,
          explanation: "There are exactly 11 distinct nets that fold into a cube."
        },
        {
          id: "TSR1215_2_07",
          question: "What shape is the cross-section when a cube is cut by a plane parallel to one of its faces?",
          hint: "A cut parallel to a square face produces...",
          options: ["Square", "Rectangle", "Triangle", "Hexagon"],
          correct: 0,
          explanation: "Cutting a cube with a plane parallel to one of its square faces always produces a square cross-section."
        },
        {
          id: "TSR1215_2_08",
          question: "What shape is the cross-section when a cylinder is cut by a plane parallel to its circular base?",
          hint: "The base of a cylinder is a circle.",
          options: ["Circle", "Ellipse", "Rectangle", "Oval"],
          correct: 0,
          explanation: "A plane parallel to the circular base cuts the cylinder in a circle of the same radius."
        },
        {
          id: "TSR1215_2_09",
          question: "What shape is the cross-section when a cylinder is cut by a plane perpendicular to its base, passing through its central axis?",
          hint: "Imagine slicing a can straight down through the middle.",
          options: ["Rectangle", "Circle", "Ellipse", "Triangle"],
          correct: 0,
          explanation: "A vertical cut through the axis of a cylinder produces a rectangle (height × diameter)."
        },
        {
          id: "TSR1215_2_10",
          question: "In a 3×3×3 painted cube, how many small cubes have at least 1 painted face?",
          hint: "Subtract interior cubes from the total.",
          options: ["26", "27", "20", "24"],
          correct: 0,
          explanation: "27 total − 1 interior (0 painted) = 26 cubes with at least 1 painted face."
        },
        {
          id: "TSR1215_2_11",
          question: "In a 3×3×3 painted cube, how many small cubes have at least 2 painted faces?",
          hint: "Add corner cubes (3 faces) and edge cubes (2 faces).",
          options: ["20", "12", "8", "24"],
          correct: 0,
          explanation: "8 corners (3 painted) + 12 edges (2 painted) = 20 cubes with at least 2 painted faces."
        },
        {
          id: "TSR1215_2_12",
          question: "What shape is the cross-section when a cone is cut by a plane parallel to its circular base?",
          hint: "The base of a cone is a circle.",
          options: ["Circle", "Triangle", "Ellipse", "Parabola"],
          correct: 0,
          explanation: "A plane parallel to the circular base of a cone cuts it in a smaller circle."
        },
        {
          id: "TSR1215_2_13",
          question: "How many faces does a triangular prism have?",
          hint: "Count the triangular bases and the rectangular sides.",
          options: ["5", "6", "4", "8"],
          correct: 0,
          explanation: "A triangular prism has 2 triangular bases + 3 rectangular lateral faces = 5 faces."
        },
        {
          id: "TSR1215_2_14",
          question: "How many edges does a triangular prism have?",
          hint: "Count edges on each base plus the lateral edges.",
          options: ["9", "6", "8", "12"],
          correct: 0,
          explanation: "3 edges on top base + 3 on bottom base + 3 lateral edges = 9 edges."
        },
        {
          id: "TSR1215_2_15",
          question: "How many vertices does a triangular prism have?",
          hint: "Count vertices on both triangular bases.",
          options: ["6", "8", "5", "9"],
          correct: 0,
          explanation: "3 vertices on top + 3 on bottom = 6 vertices."
        },
        {
          id: "TSR1215_2_16",
          question: "A cube is cut by a plane perpendicular to a space diagonal, passing through the center. The plane intersects the midpoints of 6 edges. What shape is the cross-section?",
          hint: "This special cut touches all 6 faces of the cube.",
          options: ["Regular hexagon", "Square", "Equilateral triangle", "Pentagon"],
          correct: 0,
          explanation: "A plane perpendicular to a space diagonal through the cube's center creates a regular hexagonal cross-section, touching one edge midpoint per face."
        },
        {
          id: "TSR1215_2_17",
          question: "Verify Euler's formula for a triangular prism: with V = 6, E = 9, and F = 5, what is V − E + F?",
          hint: "Substitute the values directly.",
          options: ["2", "0", "1", "3"],
          correct: 0,
          explanation: "6 − 9 + 5 = 2, confirming Euler's formula."
        },
        {
          id: "TSR1215_2_18",
          question: "A 3×3×3 cube is made of unit cubes. What is its total outer surface area in unit squares?",
          hint: "Surface area = 6 × side².",
          options: ["54", "36", "27", "48"],
          correct: 0,
          explanation: "6 × 3² = 6 × 9 = 54 unit squares."
        },
        {
          id: "TSR1215_2_19",
          question: "In a 3×3×3 painted cube, what is the total number of painted unit-square faces across all 27 small cubes?",
          hint: "Each face of the big cube has 9 painted small squares.",
          options: ["54", "48", "27", "36"],
          correct: 0,
          explanation: "6 faces × 9 painted unit squares = 54. Verify: 8×3 + 12×2 + 6×1 + 1×0 = 24 + 24 + 6 + 0 = 54."
        },
        {
          id: "TSR1215_2_20",
          question: "What shape is the cross-section when a sphere is cut by any flat plane?",
          hint: "Think about slicing a ball at any angle.",
          options: ["Circle", "Ellipse", "It depends on the angle", "Oval"],
          correct: 0,
          explanation: "Any flat plane cutting through a sphere always produces a perfect circle, regardless of angle."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "4×4×4 painted cube problems, L-shaped cube arrangements, surface area of combined shapes, and cube modifications.",
      exercises: [
        {
          id: "TSR1215_3_01",
          question: "How many unit cubes make up a 4×4×4 cube?",
          hint: "Multiply the three dimensions.",
          options: ["64", "48", "32", "56"],
          correct: 0,
          explanation: "4 × 4 × 4 = 64 unit cubes."
        },
        {
          id: "TSR1215_3_02",
          question: "A 4×4×4 cube is painted on all faces, then cut into unit cubes. How many have exactly 3 painted faces?",
          hint: "Corner cubes always have 3 painted faces, regardless of cube size.",
          options: ["8", "12", "24", "4"],
          correct: 0,
          explanation: "Any painted cube has exactly 8 corners, each with 3 painted faces."
        },
        {
          id: "TSR1215_3_03",
          question: "A 4×4×4 cube is painted on all faces, then cut into unit cubes. How many have exactly 2 painted faces?",
          hint: "Edge cubes (not corners) have 2 painted faces. Each edge has (n−2) such cubes.",
          options: ["24", "12", "32", "16"],
          correct: 0,
          explanation: "Each of 12 edges has (4 − 2) = 2 edge cubes. 12 × 2 = 24."
        },
        {
          id: "TSR1215_3_04",
          question: "A 4×4×4 cube is painted on all faces, then cut into unit cubes. How many have exactly 1 painted face?",
          hint: "Face-center cubes have 1 painted face. Each face has (n−2)² such cubes.",
          options: ["24", "16", "32", "12"],
          correct: 0,
          explanation: "Each of 6 faces has (4 − 2)² = 4 center cubes. 6 × 4 = 24."
        },
        {
          id: "TSR1215_3_05",
          question: "A 4×4×4 cube is painted on all faces, then cut into unit cubes. How many have 0 painted faces?",
          hint: "Interior cubes form an (n−2)³ block.",
          options: ["8", "0", "1", "16"],
          correct: 0,
          explanation: "The interior block is (4 − 2)³ = 2³ = 8 cubes with no paint. Verify: 8 + 24 + 24 + 8 = 64."
        },
        {
          id: "TSR1215_3_06",
          question: "In a 4×4×4 painted cube, how many small cubes have at least 1 painted face?",
          hint: "Total cubes minus interior cubes.",
          options: ["56", "48", "64", "32"],
          correct: 0,
          explanation: "64 total − 8 interior = 56 cubes with at least 1 painted face."
        },
        {
          id: "TSR1215_3_07",
          question: "In a 4×4×4 painted cube, how many small cubes have at least 2 painted faces?",
          hint: "Add corners (3 faces) and edges (2 faces).",
          options: ["32", "24", "8", "48"],
          correct: 0,
          explanation: "8 corners (3 faces) + 24 edges (2 faces) = 32."
        },
        {
          id: "TSR1215_3_08",
          question: "An L-shaped structure is built from 6 unit cubes: 4 in a horizontal row and 3 in a perpendicular column, sharing one corner cube. How many faces are visible?",
          hint: "Total cubes = 4 + 3 − 1 = 6, with 5 face-to-face joints.",
          options: ["26", "28", "24", "30"],
          correct: 0,
          explanation: "6 cubes × 6 faces = 36 total. 5 joints × 2 = 10 hidden. 36 − 10 = 26."
        },
        {
          id: "TSR1215_3_09",
          question: "What is the surface area of a cuboid with dimensions 2 × 3 × 4?",
          hint: "SA = 2(lw + lh + wh).",
          options: ["52", "48", "24", "36"],
          correct: 0,
          explanation: "2(2×3 + 2×4 + 3×4) = 2(6 + 8 + 12) = 2 × 26 = 52."
        },
        {
          id: "TSR1215_3_10",
          question: "A 1×1×1 unit cube is placed on top of a 3×3×1 flat slab (centered on the top face). What is the total surface area of the combined shape?",
          hint: "Add the individual surface areas, then subtract twice the contact area.",
          options: ["34", "36", "30", "32"],
          correct: 0,
          explanation: "Slab SA = 2(3×3) + 4(3×1) = 18 + 12 = 30. Cube SA = 6. Contact area = 1×1 on each, so subtract 2 × 1 = 2. Total = 30 + 6 − 2 = 34."
        },
        {
          id: "TSR1215_3_11",
          question: "A 3×3×3 cube is made of 27 unit cubes. If one corner cube is removed, what is the new total surface area?",
          hint: "The corner cube had 3 exterior faces and 3 faces touching neighbors.",
          options: ["54", "51", "57", "48"],
          correct: 0,
          explanation: "Removing the corner loses 3 exterior faces but exposes 3 previously hidden neighbor faces. Net change = −3 + 3 = 0. New SA = 54."
        },
        {
          id: "TSR1215_3_12",
          question: "A 3×3×3 cube is made of 27 unit cubes. If one edge-middle cube is removed (not a corner), what is the new total surface area?",
          hint: "An edge cube has 2 exterior faces and 4 faces touching neighbors.",
          options: ["56", "54", "52", "58"],
          correct: 0,
          explanation: "Removing the edge cube loses 2 exterior faces but exposes 4 neighbor faces. Net change = −2 + 4 = +2. New SA = 54 + 2 = 56."
        },
        {
          id: "TSR1215_3_13",
          question: "A 3×3×3 cube is made of 27 unit cubes. If the center cube of one face is removed, what is the new total surface area?",
          hint: "A face-center cube has 1 exterior face and 5 faces touching neighbors.",
          options: ["58", "54", "56", "60"],
          correct: 0,
          explanation: "Removing the face-center cube loses 1 exterior face but exposes 5 neighbor faces (4 on the same face + 1 behind). Net change = −1 + 5 = +4. New SA = 54 + 4 = 58."
        },
        {
          id: "TSR1215_3_14",
          question: "A 5×5×5 cube is painted on all faces, then cut into unit cubes. How many have 0 painted faces?",
          hint: "Interior cubes = (n−2)³.",
          options: ["27", "8", "1", "64"],
          correct: 0,
          explanation: "(5 − 2)³ = 3³ = 27 interior cubes with no paint."
        },
        {
          id: "TSR1215_3_15",
          question: "A 5×5×5 cube is painted on all faces, then cut into unit cubes. How many have exactly 2 painted faces?",
          hint: "Edge cubes = 12 × (n−2).",
          options: ["36", "24", "48", "12"],
          correct: 0,
          explanation: "12 edges × (5 − 2) = 12 × 3 = 36 edge cubes with exactly 2 painted faces."
        },
        {
          id: "TSR1215_3_16",
          question: "Two identical cuboids, each 2×2×3, are glued together along a 2×3 face. What is the surface area of the combined shape?",
          hint: "The combined shape is a 4×2×3 cuboid.",
          options: ["52", "64", "44", "48"],
          correct: 0,
          explanation: "Combined shape: 4×2×3. SA = 2(4×2 + 4×3 + 2×3) = 2(8 + 12 + 6) = 2 × 26 = 52."
        },
        {
          id: "TSR1215_3_17",
          question: "What is the surface area of a flat slab of unit cubes arranged in a 2×3×1 shape?",
          hint: "SA = 2(lw + lh + wh) with l=2, w=3, h=1.",
          options: ["22", "12", "16", "30"],
          correct: 0,
          explanation: "2(2×3 + 2×1 + 3×1) = 2(6 + 2 + 3) = 2 × 11 = 22."
        },
        {
          id: "TSR1215_3_18",
          question: "In a 4×4×4 painted cube, what is the total number of painted unit-square faces across all 64 small cubes?",
          hint: "Each face of the big cube has 4×4 = 16 painted unit squares.",
          options: ["96", "64", "108", "84"],
          correct: 0,
          explanation: "6 faces × 16 unit squares = 96. Verify: 8×3 + 24×2 + 24×1 + 8×0 = 24 + 48 + 24 + 0 = 96."
        },
        {
          id: "TSR1215_3_19",
          question: "A 3×3×3 cube 'wireframe' is built using only the cubes that lie along the edges (including corners). How many unit cubes are needed?",
          hint: "Each of 12 edges has 3 cubes, but corners are shared by 3 edges each.",
          options: ["20", "12", "24", "36"],
          correct: 0,
          explanation: "8 corner cubes + 12 edge-middle cubes (one per edge) = 20. Or: 12 edges × 3 − 8 corners × 2 extra counts = 36 − 16 = 20."
        },
        {
          id: "TSR1215_3_20",
          question: "A 3×3×3 cube has its center column of 3 cubes removed (a 1×1×3 tunnel straight through the cube). What is the new total surface area?",
          hint: "The tunnel removes 2 exterior faces and adds 4 interior walls of length 3.",
          options: ["64", "60", "54", "58"],
          correct: 0,
          explanation: "Original SA = 54. The tunnel removes 2 end faces but adds 4 × 3 = 12 tunnel-wall faces. 54 − 2 + 12 = 64."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Platonic solid properties, Euler's formula applications, complex 3D joining, and cross-sections of pyramids and cones.",
      exercises: [
        {
          id: "TSR1215_4_01",
          question: "How many faces does a regular octahedron have?",
          hint: "An octahedron looks like two square pyramids glued at their bases.",
          options: ["8", "6", "12", "10"],
          correct: 0,
          explanation: "A regular octahedron has 8 equilateral triangular faces."
        },
        {
          id: "TSR1215_4_02",
          question: "A regular octahedron has 8 faces and 12 edges. Using Euler's formula (V − E + F = 2), how many vertices does it have?",
          hint: "V − 12 + 8 = 2. Solve for V.",
          options: ["6", "8", "12", "4"],
          correct: 0,
          explanation: "V − 12 + 8 = 2 → V = 6. A regular octahedron has 6 vertices."
        },
        {
          id: "TSR1215_4_03",
          question: "How many edges does a regular octahedron have?",
          hint: "It has 8 triangular faces and 6 vertices.",
          options: ["12", "8", "18", "24"],
          correct: 0,
          explanation: "A regular octahedron has 12 edges. Verify: V − E + F = 6 − 12 + 8 = 2."
        },
        {
          id: "TSR1215_4_04",
          question: "How many faces does a regular dodecahedron have?",
          hint: "Its name comes from the Greek 'dodeca' meaning twelve.",
          options: ["12", "20", "8", "10"],
          correct: 0,
          explanation: "A regular dodecahedron has 12 pentagonal faces."
        },
        {
          id: "TSR1215_4_05",
          question: "A regular dodecahedron has 12 faces and 20 vertices. Using Euler's formula, how many edges does it have?",
          hint: "20 − E + 12 = 2. Solve for E.",
          options: ["30", "24", "20", "36"],
          correct: 0,
          explanation: "20 − E + 12 = 2 → E = 30. A regular dodecahedron has 30 edges."
        },
        {
          id: "TSR1215_4_06",
          question: "How many vertices does a regular dodecahedron have?",
          hint: "It has 12 pentagonal faces and 30 edges.",
          options: ["20", "12", "30", "24"],
          correct: 0,
          explanation: "A regular dodecahedron has 20 vertices. Verify: 20 − 30 + 12 = 2."
        },
        {
          id: "TSR1215_4_07",
          question: "How many faces does a regular icosahedron have?",
          hint: "Its name comes from the Greek 'eikosi' meaning twenty.",
          options: ["20", "12", "8", "30"],
          correct: 0,
          explanation: "A regular icosahedron has 20 equilateral triangular faces."
        },
        {
          id: "TSR1215_4_08",
          question: "A regular icosahedron has 20 faces and 12 vertices. Using Euler's formula, how many edges does it have?",
          hint: "12 − E + 20 = 2. Solve for E.",
          options: ["30", "24", "20", "36"],
          correct: 0,
          explanation: "12 − E + 20 = 2 → E = 30. A regular icosahedron has 30 edges."
        },
        {
          id: "TSR1215_4_09",
          question: "How many vertices does a regular icosahedron have?",
          hint: "It has 20 triangular faces and 30 edges.",
          options: ["12", "20", "30", "8"],
          correct: 0,
          explanation: "A regular icosahedron has 12 vertices. Verify: 12 − 30 + 20 = 2."
        },
        {
          id: "TSR1215_4_10",
          question: "Each face of a regular octahedron is what shape?",
          hint: "All Platonic solids have regular polygon faces.",
          options: ["Equilateral triangle", "Square", "Regular pentagon", "Regular hexagon"],
          correct: 0,
          explanation: "Each of the 8 faces of a regular octahedron is an equilateral triangle."
        },
        {
          id: "TSR1215_4_11",
          question: "Each face of a regular dodecahedron is what shape?",
          hint: "It has 12 faces, and 'dodecahedron' is linked to 12-sided geometry.",
          options: ["Regular pentagon", "Equilateral triangle", "Square", "Regular hexagon"],
          correct: 0,
          explanation: "Each of the 12 faces of a regular dodecahedron is a regular pentagon (5 sides)."
        },
        {
          id: "TSR1215_4_12",
          question: "Each face of a regular icosahedron is what shape?",
          hint: "It has 20 faces. What regular polygon tiles into 20 faces with 12 vertices?",
          options: ["Equilateral triangle", "Regular pentagon", "Square", "Regular hexagon"],
          correct: 0,
          explanation: "Each of the 20 faces of a regular icosahedron is an equilateral triangle."
        },
        {
          id: "TSR1215_4_13",
          question: "A convex polyhedron has 8 faces and 6 vertices. Using Euler's formula, how many edges does it have?",
          hint: "V − E + F = 2 → 6 − E + 8 = 2.",
          options: ["12", "10", "14", "8"],
          correct: 0,
          explanation: "6 − E + 8 = 2 → E = 12. This matches the octahedron (6 vertices, 12 edges, 8 faces)."
        },
        {
          id: "TSR1215_4_14",
          question: "Two regular tetrahedra are glued together on one triangular face. How many faces does the resulting solid (triangular bipyramid) have?",
          hint: "Each tetrahedron has 4 faces. Gluing hides 1 face from each.",
          options: ["6", "8", "4", "5"],
          correct: 0,
          explanation: "4 + 4 − 2 (hidden at joint) = 6 triangular faces. The faces do not merge because the dihedral angles are not supplementary."
        },
        {
          id: "TSR1215_4_15",
          question: "A cube and a square pyramid (with matching square base) are glued together on the square face. How many faces does the resulting solid have?",
          hint: "Cube has 6 faces, pyramid has 5. Gluing removes 1 face from each.",
          options: ["9", "10", "8", "11"],
          correct: 0,
          explanation: "Cube contributes 5 remaining faces + pyramid contributes 4 triangular faces = 9 total faces."
        },
        {
          id: "TSR1215_4_16",
          question: "A square pyramid is cut by a plane parallel to its square base, halfway between the base and apex. What shape is the cross-section?",
          hint: "A cut parallel to the base of a pyramid produces a similar shape.",
          options: ["Square", "Rectangle", "Triangle", "Trapezoid"],
          correct: 0,
          explanation: "A plane parallel to the square base of a square pyramid produces a smaller, similar square."
        },
        {
          id: "TSR1215_4_17",
          question: "A right circular cone is cut by a plane that passes through its apex and is perpendicular to the base. What shape is the cross-section?",
          hint: "This cuts the cone exactly in half, revealing its profile.",
          options: ["Isosceles triangle", "Circle", "Parabola", "Ellipse"],
          correct: 0,
          explanation: "A vertical plane through the apex and perpendicular to the base produces an isosceles triangle (the cone's profile)."
        },
        {
          id: "TSR1215_4_18",
          question: "A convex polyhedron has 4 triangular faces and 6 edges. Using Euler's formula, how many vertices does it have?",
          hint: "V − 6 + 4 = 2. Solve for V.",
          options: ["4", "6", "8", "3"],
          correct: 0,
          explanation: "V − 6 + 4 = 2 → V = 4. This is a tetrahedron (4 vertices, 6 edges, 4 faces)."
        },
        {
          id: "TSR1215_4_19",
          question: "A right circular cone is cut by a tilted plane that slices completely through the cone but is neither parallel to the base nor passing through the apex. What shape is the cross-section?",
          hint: "This is one of the classic conic sections.",
          options: ["Ellipse", "Circle", "Parabola", "Triangle"],
          correct: 0,
          explanation: "A tilted plane that cuts completely through a cone (intersecting both sides of the lateral surface) produces an ellipse."
        },
        {
          id: "TSR1215_4_20",
          question: "A hexagonal prism has 8 faces and 12 vertices. Using Euler's formula, how many edges does it have?",
          hint: "V − E + F = 2 → 12 − E + 8 = 2.",
          options: ["18", "12", "15", "24"],
          correct: 0,
          explanation: "12 − E + 8 = 2 → E = 18. A hexagonal prism has 18 edges (6 top + 6 bottom + 6 lateral)."
        }
      ]
    }
  ]
};
