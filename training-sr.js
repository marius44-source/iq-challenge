const TRAINING_SR = {
  tips: [
    {
      title: "Mentally Fold and Unfold",
      content: "When working with cube nets or paper folding, imagine physically folding the flat shape into 3D. Track one face at a time and note which edges join together — this helps identify opposite faces and neighbor relationships."
    },
    {
      title: "Rotate in Steps",
      content: "Break complex rotations into simple 90° steps. Instead of trying to visualize a 270° rotation all at once, do three 90° turns sequentially. This reduces errors and makes it easier to track orientation."
    },
    {
      title: "Count Faces, Edges, and Vertices",
      content: "Know the formulas: a prism with an n-sided base has (n+2) faces, 3n edges, and 2n vertices. A pyramid with an n-sided base has (n+1) faces, 2n edges, and (n+1) vertices. When joining shapes, subtract hidden faces. Euler's formula V − E + F = 2 is a powerful check."
    },
    {
      title: "Use Process of Elimination",
      content: "When comparing shapes, systematically check orientation, chirality (mirror image), and proportions. If even one feature doesn't match, eliminate that option. This is especially useful for rotation and reflection problems."
    }
  ],

  levels: [
    // ===================== LEVEL 1 — Beginner =====================
    {
      level: 1,
      name: "Beginner",
      description: "Basic 2D and 3D shape properties: counting sides, angles, faces, and vertices",
      exercises: [
        {
          id: "TSR1_01",
          question: "How many sides does a pentagon have?",
          hint: "The prefix 'penta-' refers to a specific number.",
          options: ["5", "4", "6", "7"],
          correct: 0,
          explanation: "'Pentagon' comes from the Greek word for five. A pentagon has exactly 5 sides."
        },
        {
          id: "TSR1_02",
          question: "How many sides does a hexagon have?",
          hint: "The prefix 'hexa-' means a number — think of hexadecimal.",
          options: ["6", "5", "8", "7"],
          correct: 0,
          explanation: "'Hexagon' comes from the Greek word for six. A hexagon has 6 sides."
        },
        {
          id: "TSR1_03",
          question: "How many sides does an octagon have?",
          hint: "Think of 'octopus' — how many arms does it have?",
          options: ["8", "6", "10", "7"],
          correct: 0,
          explanation: "The prefix 'octa-' means eight, just like an octopus has 8 arms. An octagon has 8 sides."
        },
        {
          id: "TSR1_04",
          question: "How many angles does a triangle have?",
          hint: "The prefix 'tri-' tells you the answer directly.",
          options: ["3", "4", "2", "1"],
          correct: 0,
          explanation: "A triangle has 3 angles — one at each vertex where two sides meet."
        },
        {
          id: "TSR1_05",
          question: "How many angles does a pentagon have?",
          hint: "Each side meets the next side at an angle. Count the sides.",
          options: ["5", "4", "6", "3"],
          correct: 0,
          explanation: "Any polygon has as many angles as it has sides. A pentagon has 5 sides and 5 angles."
        },
        {
          id: "TSR1_06",
          question: "How many faces does a rectangular box (rectangular prism) have?",
          hint: "Think about top, bottom, front, back, left, and right.",
          options: ["6", "4", "8", "5"],
          correct: 0,
          explanation: "A rectangular prism has 6 faces: top, bottom, front, back, left, and right."
        },
        {
          id: "TSR1_07",
          question: "How many vertices (corners) does a triangle have?",
          hint: "A vertex is where two sides meet. Count the corners.",
          options: ["3", "4", "2", "6"],
          correct: 0,
          explanation: "A triangle has 3 vertices — one at each corner where two sides meet."
        },
        {
          id: "TSR1_08",
          question: "Which 2D shape has exactly 3 sides and 3 angles?",
          hint: "This is one of the simplest polygons.",
          options: ["Triangle", "Square", "Pentagon", "Circle"],
          correct: 0,
          explanation: "A triangle is the polygon with 3 sides and 3 angles."
        },
        {
          id: "TSR1_09",
          question: "If you fold a sheet of paper in half once, how many layers of paper do you have?",
          hint: "Before folding you have 1 layer. Folding doubles the count.",
          options: ["2", "1", "3", "4"],
          correct: 0,
          explanation: "Each fold in half doubles the number of layers. Starting with 1, one fold gives 2 layers."
        },
        {
          id: "TSR1_10",
          question: "What shape is every face of a standard cube?",
          hint: "All faces of a cube are identical. What regular shape has 4 equal sides and 4 right angles?",
          options: ["Square", "Rectangle", "Triangle", "Circle"],
          correct: 0,
          explanation: "A cube has 6 faces, and every one of them is a square."
        },
        {
          id: "TSR1_11",
          question: "Which 3D shape looks exactly the same no matter how you slice through its center?",
          hint: "This shape has no edges, no vertices, and is perfectly round.",
          options: ["Sphere", "Cylinder", "Cone", "Cube"],
          correct: 0,
          explanation: "A sphere is perfectly symmetrical. Any cut through its center produces an identical circle."
        },
        {
          id: "TSR1_12",
          question: "How many straight sides does a circle have?",
          hint: "A circle is curved everywhere. Are there any straight parts?",
          options: ["0", "1", "2", "Infinite"],
          correct: 0,
          explanation: "A circle has no straight sides at all — it is a continuous curve with no corners or straight segments."
        },
        {
          id: "TSR1_13",
          question: "How many sides does a triangle have?",
          hint: "The name tells you: 'tri' means three.",
          options: ["3", "2", "4", "5"],
          correct: 0,
          explanation: "A triangle is a polygon with exactly 3 sides."
        },
        {
          id: "TSR1_14",
          question: "How many sides does a square have?",
          hint: "Think of a window pane or a chessboard tile.",
          options: ["4", "3", "5", "6"],
          correct: 0,
          explanation: "A square has 4 equal sides and 4 right angles."
        },
        {
          id: "TSR1_15",
          question: "How many vertices (corners) does a square have?",
          hint: "Count the points where two sides meet.",
          options: ["4", "3", "5", "6"],
          correct: 0,
          explanation: "A square has 4 vertices — one at each corner."
        },
        {
          id: "TSR1_16",
          question: "How many vertices does a hexagon have?",
          hint: "A polygon always has the same number of vertices as sides.",
          options: ["6", "5", "8", "4"],
          correct: 0,
          explanation: "A hexagon has 6 sides and therefore 6 vertices."
        },
        {
          id: "TSR1_17",
          question: "If you fold a piece of paper in half twice, how many layers do you end up with?",
          hint: "Each fold doubles the current number of layers.",
          options: ["4", "2", "3", "8"],
          correct: 0,
          explanation: "First fold: 1 → 2 layers. Second fold: 2 → 4 layers."
        },
        {
          id: "TSR1_18",
          question: "Which shape has 4 sides with all angles equal to 90° and opposite sides parallel?",
          hint: "This is the most common shape for doors, screens, and books.",
          options: ["Rectangle", "Trapezoid", "Rhombus", "Parallelogram"],
          correct: 0,
          explanation: "A rectangle has 4 sides with opposite sides parallel and all interior angles at 90°."
        },
        {
          id: "TSR1_19",
          question: "How many corners does a rectangle have?",
          hint: "A corner is where two sides meet at an angle.",
          options: ["4", "2", "3", "5"],
          correct: 0,
          explanation: "A rectangle has 4 corners (vertices), one at each of its four right angles."
        },
        {
          id: "TSR1_20",
          question: "Which 2D shape has every point on its boundary the same distance from the center?",
          hint: "Think of a coin viewed from above, or a pizza.",
          options: ["Circle", "Ellipse", "Square", "Oval"],
          correct: 0,
          explanation: "A circle is defined as the set of all points equidistant from a center point. This constant distance is the radius."
        }
      ]
    },

    // ===================== LEVEL 2 — Elementary =====================
    {
      level: 2,
      name: "Elementary",
      description: "3D shape properties, prisms, pyramids, and simple combinations of cubes",
      exercises: [
        {
          id: "TSR2_01",
          question: "How many edges does a rectangular prism (box) have?",
          hint: "Count the edges on the top face, the bottom face, and the vertical edges connecting them.",
          options: ["12", "8", "10", "6"],
          correct: 0,
          explanation: "A rectangular prism has 4 edges on top + 4 on the bottom + 4 vertical edges = 12 edges total."
        },
        {
          id: "TSR2_02",
          question: "How many vertices does a rectangular prism have?",
          hint: "Count the corners on the top face and the bottom face separately.",
          options: ["8", "6", "10", "12"],
          correct: 0,
          explanation: "A rectangular prism has 4 vertices on top and 4 on the bottom = 8 vertices total."
        },
        {
          id: "TSR2_03",
          question: "How many faces does a pentagonal prism have?",
          hint: "A prism with an n-sided base has n rectangular side faces plus 2 base faces.",
          options: ["7", "5", "10", "6"],
          correct: 0,
          explanation: "A pentagonal prism has 2 pentagonal bases + 5 rectangular side faces = 7 faces."
        },
        {
          id: "TSR2_04",
          question: "How many edges does a triangular prism have?",
          hint: "Count edges on each triangular base, then the edges connecting them.",
          options: ["9", "6", "8", "12"],
          correct: 0,
          explanation: "A triangular prism has 3 edges on top + 3 on the bottom + 3 connecting edges = 9 total."
        },
        {
          id: "TSR2_05",
          question: "How many vertices does a triangular prism have?",
          hint: "Each triangular base contributes its own set of vertices.",
          options: ["6", "5", "8", "9"],
          correct: 0,
          explanation: "A triangular prism has 3 vertices on each triangular base: 3 + 3 = 6 vertices."
        },
        {
          id: "TSR2_06",
          question: "If 4 identical cubes are placed in a straight line, each sharing one face with the next, how many faces are visible in total (including the bottom)?",
          hint: "Start with the total faces of 4 separate cubes, then subtract the hidden faces at each joint.",
          options: ["18", "20", "16", "24"],
          correct: 0,
          explanation: "4 cubes have 4 × 6 = 24 faces. There are 3 joints, each hiding 2 faces: 24 − 6 = 18 visible."
        },
        {
          id: "TSR2_07",
          question: "How many faces does a hexagonal prism have?",
          hint: "A prism based on an n-sided polygon has n + 2 faces.",
          options: ["8", "6", "12", "10"],
          correct: 0,
          explanation: "A hexagonal prism has 2 hexagonal bases + 6 rectangular sides = 8 faces."
        },
        {
          id: "TSR2_08",
          question: "How many edges does a pentagonal prism have?",
          hint: "For any prism with an n-sided base, the total edges are 3n.",
          options: ["15", "10", "12", "20"],
          correct: 0,
          explanation: "A pentagonal prism: 5 edges on top + 5 on bottom + 5 vertical = 3 × 5 = 15 edges."
        },
        {
          id: "TSR2_09",
          question: "How many vertices does a pentagonal prism have?",
          hint: "A prism doubles the vertices of its base polygon.",
          options: ["10", "12", "8", "15"],
          correct: 0,
          explanation: "A pentagonal prism has 5 vertices on each base: 5 × 2 = 10 vertices."
        },
        {
          id: "TSR2_10",
          question: "How many edges does a square pyramid have?",
          hint: "Count the base edges, then the edges from each base corner to the apex.",
          options: ["8", "5", "6", "10"],
          correct: 0,
          explanation: "A square pyramid has 4 base edges + 4 lateral edges to the apex = 8 edges."
        },
        {
          id: "TSR2_11",
          question: "How many vertices does a square pyramid have?",
          hint: "Don't forget the apex on top!",
          options: ["5", "4", "6", "8"],
          correct: 0,
          explanation: "A square pyramid has 4 base corners + 1 apex = 5 vertices."
        },
        {
          id: "TSR2_12",
          question: "How many faces does a square pyramid have?",
          hint: "Count the base and each triangular side face.",
          options: ["5", "4", "6", "8"],
          correct: 0,
          explanation: "A square pyramid has 1 square base + 4 triangular faces = 5 faces."
        },
        {
          id: "TSR2_13",
          question: "How many edges does a hexagonal prism have?",
          hint: "Apply the formula: edges = 3 × (number of sides in the base).",
          options: ["18", "12", "24", "15"],
          correct: 0,
          explanation: "A hexagonal prism: 6 top edges + 6 bottom edges + 6 vertical edges = 3 × 6 = 18 edges."
        },
        {
          id: "TSR2_14",
          question: "How many vertices does a hexagonal prism have?",
          hint: "Each hexagonal base has 6 corners.",
          options: ["12", "8", "6", "18"],
          correct: 0,
          explanation: "A hexagonal prism has 6 vertices per base × 2 bases = 12 vertices."
        },
        {
          id: "TSR2_15",
          question: "If 5 identical cubes are placed in a straight line sharing faces, how many total faces are visible (including bottom)?",
          hint: "5 cubes = 30 total faces. How many joints are there, and how many faces does each hide?",
          options: ["22", "20", "24", "26"],
          correct: 0,
          explanation: "5 cubes have 30 faces. 4 joints × 2 hidden faces = 8 hidden. 30 − 8 = 22 visible."
        },
        {
          id: "TSR2_16",
          question: "How many faces does an octagonal prism have?",
          hint: "Prism formula: n + 2 faces for an n-sided base.",
          options: ["10", "8", "12", "16"],
          correct: 0,
          explanation: "An octagonal prism has 2 octagonal bases + 8 rectangular sides = 10 faces."
        },
        {
          id: "TSR2_17",
          question: "How many edges does an octagonal prism have?",
          hint: "Prism formula: 3n edges for an n-sided base.",
          options: ["24", "16", "20", "32"],
          correct: 0,
          explanation: "An octagonal prism has 3 × 8 = 24 edges."
        },
        {
          id: "TSR2_18",
          question: "How many vertices does a triangular pyramid (tetrahedron) have?",
          hint: "A triangular pyramid has a triangular base and one point on top.",
          options: ["4", "3", "5", "6"],
          correct: 0,
          explanation: "A tetrahedron has 3 base vertices + 1 apex = 4 vertices."
        },
        {
          id: "TSR2_19",
          question: "Euler's formula states V − E + F = 2 for convex polyhedra. If a polyhedron has 6 vertices and 12 edges, how many faces does it have?",
          hint: "Rearrange: F = 2 − V + E.",
          options: ["8", "6", "10", "7"],
          correct: 0,
          explanation: "F = 2 − V + E = 2 − 6 + 12 = 8 faces. (This matches a cube or a regular octahedron.)"
        },
        {
          id: "TSR2_20",
          question: "How many diagonals does a square have?",
          hint: "A diagonal connects two non-adjacent vertices. A square has 4 vertices.",
          options: ["2", "4", "1", "3"],
          correct: 0,
          explanation: "A square has 2 diagonals, each connecting opposite corners."
        }
      ]
    },

    // ===================== LEVEL 3 — Intermediate =====================
    {
      level: 3,
      name: "Intermediate",
      description: "3×3×3 painted-cube analysis, cross-sections of solids, and Euler's formula applications",
      exercises: [
        {
          id: "TSR3_01",
          question: "A 3×3×3 cube is painted on all faces, then cut into 27 small cubes. How many small cubes have at least one painted face?",
          hint: "Only the cube at the very center of the 3×3×3 has no paint. How many cubes are NOT at the center?",
          options: ["26", "24", "20", "27"],
          correct: 0,
          explanation: "Only 1 cube (the center) has 0 painted faces. So 27 − 1 = 26 cubes have at least one painted face."
        },
        {
          id: "TSR3_02",
          question: "A 3×3×3 cube is painted on all faces and cut into 27 small cubes. What is the total number of painted unit-faces across all 27 small cubes?",
          hint: "Each of the 6 original faces is a 3×3 grid of 9 painted unit-faces.",
          options: ["54", "48", "36", "27"],
          correct: 0,
          explanation: "Each of the 6 faces of the original cube contributes 9 painted unit-faces: 6 × 9 = 54."
        },
        {
          id: "TSR3_03",
          question: "A 3×3×3 painted cube is cut into 27 small cubes. How many small cubes have at most 1 painted face?",
          hint: "Count the cubes with 0 painted faces and 1 painted face, then add them.",
          options: ["7", "6", "8", "12"],
          correct: 0,
          explanation: "1 cube has 0 painted faces (center) and 6 cubes have exactly 1 (face centers). Total: 1 + 6 = 7."
        },
        {
          id: "TSR3_04",
          question: "A 3×3×3 painted cube is cut into 27 small cubes. How many small cubes have at least 2 painted faces?",
          hint: "These are the corner cubes (3 faces) and the edge cubes (2 faces).",
          options: ["20", "12", "8", "18"],
          correct: 0,
          explanation: "8 corners (3 painted) + 12 edges (2 painted) = 20 cubes with 2 or more painted faces."
        },
        {
          id: "TSR3_05",
          question: "If you slice a cube with a plane parallel to one of its faces, what shape is the cross-section?",
          hint: "A cut parallel to a square face produces a shape congruent to that face.",
          options: ["Square", "Rectangle", "Triangle", "Hexagon"],
          correct: 0,
          explanation: "A plane parallel to a face of a cube cuts through four edges evenly, producing a square."
        },
        {
          id: "TSR3_06",
          question: "If you cut a cylinder with a plane perpendicular to its axis, what shape is the cross-section?",
          hint: "The axis runs through the center of the two circular bases.",
          options: ["Circle", "Ellipse", "Rectangle", "Oval"],
          correct: 0,
          explanation: "A cut perpendicular to the axis of a cylinder is parallel to its circular bases and produces a circle."
        },
        {
          id: "TSR3_07",
          question: "If you slice a cone with a plane parallel to its circular base, what shape do you get?",
          hint: "The base of a cone is a circle. A parallel cut produces a similar shape.",
          options: ["Circle", "Ellipse", "Triangle", "Parabola"],
          correct: 0,
          explanation: "A plane parallel to the base of a cone intersects the cone in a circle (smaller than the base)."
        },
        {
          id: "TSR3_08",
          question: "How many vertices does a sphere have?",
          hint: "A vertex is a point where edges meet. Does a sphere have any edges?",
          options: ["0", "1", "2", "Infinite"],
          correct: 0,
          explanation: "A sphere is a perfectly smooth surface with no edges and therefore no vertices."
        },
        {
          id: "TSR3_09",
          question: "How many edges does a sphere have?",
          hint: "An edge is a line segment where two flat faces meet.",
          options: ["0", "1", "2", "Infinite"],
          correct: 0,
          explanation: "A sphere has no flat faces, so it has no edges at all."
        },
        {
          id: "TSR3_10",
          question: "How many faces does a hexagonal pyramid have?",
          hint: "A pyramid has 1 base plus triangular side faces — one for each side of the base.",
          options: ["7", "6", "8", "12"],
          correct: 0,
          explanation: "A hexagonal pyramid has 1 hexagonal base + 6 triangular side faces = 7 faces."
        },
        {
          id: "TSR3_11",
          question: "How many edges does a hexagonal pyramid have?",
          hint: "Count the base edges and the edges from each base vertex to the apex.",
          options: ["12", "6", "8", "18"],
          correct: 0,
          explanation: "A hexagonal pyramid has 6 base edges + 6 lateral edges to the apex = 12 edges."
        },
        {
          id: "TSR3_12",
          question: "How many vertices does a hexagonal pyramid have?",
          hint: "Count the base vertices and the single apex.",
          options: ["7", "6", "8", "12"],
          correct: 0,
          explanation: "A hexagonal pyramid has 6 base vertices + 1 apex = 7 vertices. (Check: 7 − 12 + 7 = 2 ✓)"
        },
        {
          id: "TSR3_13",
          question: "If you cut a cube from one edge midpoint straight across to the midpoint of the opposite parallel edge, what shape can the cross-section be?",
          hint: "Cutting between two parallel edges produces a flat quadrilateral.",
          options: ["Rectangle", "Triangle", "Pentagon", "Circle"],
          correct: 0,
          explanation: "A plane passing through midpoints of two opposite parallel edges creates a rectangular cross-section."
        },
        {
          id: "TSR3_14",
          question: "How many faces does a pentagonal pyramid have?",
          hint: "1 base + side faces (one per base edge).",
          options: ["6", "5", "7", "10"],
          correct: 0,
          explanation: "A pentagonal pyramid has 1 pentagonal base + 5 triangular sides = 6 faces."
        },
        {
          id: "TSR3_15",
          question: "How many edges does a pentagonal pyramid have?",
          hint: "Pyramid edge formula: 2n edges for an n-sided base.",
          options: ["10", "5", "8", "15"],
          correct: 0,
          explanation: "A pentagonal pyramid has 5 base edges + 5 lateral edges = 10 edges."
        },
        {
          id: "TSR3_16",
          question: "How many vertices does a pentagonal pyramid have?",
          hint: "Base vertices plus the single apex.",
          options: ["6", "5", "7", "10"],
          correct: 0,
          explanation: "A pentagonal pyramid has 5 base vertices + 1 apex = 6 vertices. (Check: 6 − 10 + 6 = 2 ✓)"
        },
        {
          id: "TSR3_17",
          question: "Using Euler's formula (V − E + F = 2), if a polyhedron has 5 vertices and 8 edges, how many faces does it have?",
          hint: "Solve for F: F = 2 − V + E.",
          options: ["5", "4", "6", "7"],
          correct: 0,
          explanation: "F = 2 − 5 + 8 = 5. (This describes a square pyramid: 5 vertices, 8 edges, 5 faces.)"
        },
        {
          id: "TSR3_18",
          question: "How many diagonals does a regular hexagon have?",
          hint: "The diagonal formula for an n-sided polygon is n(n − 3) / 2.",
          options: ["9", "6", "12", "3"],
          correct: 0,
          explanation: "Diagonals = 6 × (6 − 3) / 2 = 6 × 3 / 2 = 9."
        },
        {
          id: "TSR3_19",
          question: "In a 3×3×3 painted cube cut into 27 small cubes, what is the total number of painted faces on just the 8 corner cubes combined?",
          hint: "Each corner cube has exactly 3 painted faces.",
          options: ["24", "8", "12", "18"],
          correct: 0,
          explanation: "8 corner cubes × 3 painted faces each = 24 painted faces on corners."
        },
        {
          id: "TSR3_20",
          question: "How many diagonals does a regular pentagon have?",
          hint: "Use n(n − 3) / 2 with n = 5.",
          options: ["5", "4", "6", "3"],
          correct: 0,
          explanation: "Diagonals = 5 × (5 − 3) / 2 = 5 × 2 / 2 = 5."
        }
      ]
    },

    // ===================== LEVEL 4 — Advanced =====================
    {
      level: 4,
      name: "Advanced",
      description: "4×4×4 painted-cube analysis, Platonic solids, space diagonals, and combined-shape reasoning",
      exercises: [
        {
          id: "TSR4_01",
          question: "A 4×4×4 cube is painted on all faces, then cut into 64 small cubes. How many small cubes have at least one painted face?",
          hint: "The unpainted interior forms a smaller cube of side (4 − 2) = 2.",
          options: ["56", "48", "52", "60"],
          correct: 0,
          explanation: "Interior cubes with 0 paint = 2³ = 8. So cubes with at least 1 painted face = 64 − 8 = 56."
        },
        {
          id: "TSR4_02",
          question: "A 4×4×4 painted cube is cut into 64 small cubes. How many small cubes have at least 2 painted faces?",
          hint: "These are corner cubes (3 faces) and edge cubes (2 faces). Add them up.",
          options: ["32", "24", "36", "28"],
          correct: 0,
          explanation: "Corners: 8 cubes. Edges: 12 edges × 2 middle cubes = 24. Total: 8 + 24 = 32."
        },
        {
          id: "TSR4_03",
          question: "A 4×4×4 painted cube is cut into 64 small cubes. What is the total number of painted unit-faces across all 64 small cubes?",
          hint: "Each of the 6 original faces is a 4×4 grid of painted unit-faces.",
          options: ["96", "64", "72", "108"],
          correct: 0,
          explanation: "6 faces × 16 painted unit-faces per face = 96. (Check: 8×3 + 24×2 + 24×1 = 24 + 48 + 24 = 96 ✓)"
        },
        {
          id: "TSR4_04",
          question: "A 4×4×4 painted cube is cut into 64 small cubes. How many small cubes have at most 1 painted face?",
          hint: "Add the cubes with 0 painted faces and those with exactly 1.",
          options: ["32", "24", "28", "36"],
          correct: 0,
          explanation: "0 painted: 8 (interior 2×2×2). 1 painted: 24 (face centers). Total: 8 + 24 = 32."
        },
        {
          id: "TSR4_05",
          question: "If you remove one corner cube from a 3×3×3 cube, how many unit-cube faces are visible on the remaining solid (including the bottom)?",
          hint: "Removing a corner loses 3 outer faces but exposes 3 previously hidden inner faces.",
          options: ["54", "51", "57", "48"],
          correct: 0,
          explanation: "Original surface: 6 × 9 = 54. Removing a corner: −3 outer + 3 newly exposed inner = net 0 change. Still 54."
        },
        {
          id: "TSR4_06",
          question: "How many diagonals does a regular octagon have?",
          hint: "Use the formula n(n − 3) / 2 with n = 8.",
          options: ["20", "16", "24", "8"],
          correct: 0,
          explanation: "Diagonals = 8 × (8 − 3) / 2 = 8 × 5 / 2 = 20."
        },
        {
          id: "TSR4_07",
          question: "How many space diagonals does a cube have? (A space diagonal goes through the interior from one vertex to the opposite vertex.)",
          hint: "A cube has 8 vertices. Each space diagonal pairs a vertex with its opposite.",
          options: ["4", "6", "8", "12"],
          correct: 0,
          explanation: "A cube has 4 space diagonals. Each connects a vertex to the one diagonally opposite through the center."
        },
        {
          id: "TSR4_08",
          question: "How many face diagonals does a cube have in total?",
          hint: "Each face is a square. How many diagonals does a square have? Multiply by the number of faces.",
          options: ["12", "6", "8", "24"],
          correct: 0,
          explanation: "Each of the 6 faces has 2 diagonals: 6 × 2 = 12 face diagonals."
        },
        {
          id: "TSR4_09",
          question: "A regular octahedron (two square pyramids base-to-base) has how many faces?",
          hint: "Each pyramid contributes 4 triangular faces. The shared square base is interior.",
          options: ["8", "6", "12", "20"],
          correct: 0,
          explanation: "A regular octahedron has 8 equilateral triangular faces."
        },
        {
          id: "TSR4_10",
          question: "How many edges does a regular octahedron have?",
          hint: "Use Euler's formula if you know V = 6 and F = 8.",
          options: ["12", "8", "6", "24"],
          correct: 0,
          explanation: "From Euler's formula: E = V + F − 2 = 6 + 8 − 2 = 12 edges."
        },
        {
          id: "TSR4_11",
          question: "How many vertices does a regular octahedron have?",
          hint: "Think of it as two pyramids joined at the base. Count the distinct vertices.",
          options: ["6", "8", "12", "4"],
          correct: 0,
          explanation: "4 vertices around the shared square equator + 1 top apex + 1 bottom apex = 6 vertices."
        },
        {
          id: "TSR4_12",
          question: "If 8 unit cubes are arranged in a 2×2×2 cube, how many unit-cube faces are visible on the outside (including the bottom)?",
          hint: "The result is a larger cube of side 2. What is the surface area of a 2×2×2 cube in unit-faces?",
          options: ["24", "28", "32", "20"],
          correct: 0,
          explanation: "A 2×2×2 cube has surface area 6 × (2×2) = 24 unit-faces."
        },
        {
          id: "TSR4_13",
          question: "A regular dodecahedron has 12 pentagonal faces and 30 edges. Using Euler's formula, how many vertices does it have?",
          hint: "V = 2 + E − F.",
          options: ["20", "12", "24", "30"],
          correct: 0,
          explanation: "V = 2 + 30 − 12 = 20 vertices."
        },
        {
          id: "TSR4_14",
          question: "A regular icosahedron has 20 triangular faces and 12 vertices. How many edges does it have?",
          hint: "Apply Euler's formula: E = V + F − 2.",
          options: ["30", "20", "24", "36"],
          correct: 0,
          explanation: "E = 12 + 20 − 2 = 30 edges."
        },
        {
          id: "TSR4_15",
          question: "In a 4×4×4 painted cube, what is the total number of painted faces on the 8 corner cubes combined?",
          hint: "Every corner cube always has exactly 3 painted faces, regardless of cube size.",
          options: ["24", "8", "12", "32"],
          correct: 0,
          explanation: "8 corners × 3 painted faces each = 24."
        },
        {
          id: "TSR4_16",
          question: "In a 4×4×4 painted cube, what is the total number of painted faces on just the edge cubes (those with exactly 2 painted faces)?",
          hint: "First find how many edge cubes there are, then multiply by 2.",
          options: ["48", "24", "36", "60"],
          correct: 0,
          explanation: "There are 24 edge cubes (12 edges × 2 each), each with 2 painted faces: 24 × 2 = 48."
        },
        {
          id: "TSR4_17",
          question: "If you slice a cube with a plane that passes through the midpoints of three edges meeting at one vertex, what shape is the cross-section?",
          hint: "The three midpoints are equidistant from the corner. What triangle has all sides equal?",
          options: ["Equilateral triangle", "Square", "Right triangle", "Regular hexagon"],
          correct: 0,
          explanation: "The plane cuts equally through three edges at a corner, forming an equilateral triangle."
        },
        {
          id: "TSR4_18",
          question: "How many diagonals does a regular decagon (10 sides) have?",
          hint: "Diagonal formula: n(n − 3) / 2.",
          options: ["35", "30", "40", "25"],
          correct: 0,
          explanation: "Diagonals = 10 × (10 − 3) / 2 = 10 × 7 / 2 = 35."
        },
        {
          id: "TSR4_19",
          question: "A prism has exactly 10 vertices. What shape is its base?",
          hint: "A prism with an n-sided base has 2n vertices.",
          options: ["Pentagon", "Square", "Hexagon", "Triangle"],
          correct: 0,
          explanation: "2n = 10, so n = 5. The base is a pentagon."
        },
        {
          id: "TSR4_20",
          question: "A pyramid has exactly 7 faces. What shape is its base?",
          hint: "A pyramid with an n-sided base has n + 1 faces.",
          options: ["Hexagon", "Pentagon", "Heptagon", "Octagon"],
          correct: 0,
          explanation: "n + 1 = 7, so n = 6. The base is a hexagon."
        }
      ]
    },

    // ===================== LEVEL 5 — Expert =====================
    {
      level: 5,
      name: "Expert",
      description: "5×5×5 through 10×10×10 painted cubes, general n×n×n formulas, advanced cross-sections, and Platonic solid analysis",
      exercises: [
        {
          id: "TSR5_01",
          question: "A 5×5×5 cube is painted on all faces, then cut into 125 small cubes. How many small cubes have exactly 2 painted faces?",
          hint: "Edge cubes (not corners) have 2 painted faces. Formula: 12(n − 2).",
          options: ["36", "24", "48", "30"],
          correct: 0,
          explanation: "12 edges × (5 − 2) = 12 × 3 = 36 cubes with exactly 2 painted faces."
        },
        {
          id: "TSR5_02",
          question: "A 5×5×5 cube is painted on all faces and cut into 125 small cubes. How many small cubes have exactly 3 painted faces?",
          hint: "Only corner cubes have 3 painted faces. How many corners does any cube have?",
          options: ["8", "12", "20", "6"],
          correct: 0,
          explanation: "A cube always has 8 corners, regardless of size. So 8 cubes have exactly 3 painted faces."
        },
        {
          id: "TSR5_03",
          question: "A 5×5×5 painted cube is cut into 125 small cubes. How many small cubes have at least one painted face?",
          hint: "Subtract the unpainted interior cubes: (n − 2)³.",
          options: ["98", "96", "100", "90"],
          correct: 0,
          explanation: "Interior cubes = (5 − 2)³ = 27. At least 1 painted = 125 − 27 = 98."
        },
        {
          id: "TSR5_04",
          question: "A 5×5×5 painted cube is cut into 125 small cubes. What is the total number of painted unit-faces across all cubes?",
          hint: "Each of the 6 original faces is a 5×5 grid.",
          options: ["150", "125", "144", "162"],
          correct: 0,
          explanation: "6 × 25 = 150. (Verify: 8×3 + 36×2 + 54×1 + 27×0 = 24 + 72 + 54 = 150 ✓)"
        },
        {
          id: "TSR5_05",
          question: "A 6×6×6 cube is painted on all faces and cut into 216 small cubes. How many have exactly 2 painted faces?",
          hint: "Use 12(n − 2) with n = 6.",
          options: ["48", "36", "60", "24"],
          correct: 0,
          explanation: "12 × (6 − 2) = 12 × 4 = 48."
        },
        {
          id: "TSR5_06",
          question: "A 6×6×6 cube is painted on all faces and cut into 216 small cubes. How many have exactly 1 painted face?",
          hint: "Use 6(n − 2)² with n = 6.",
          options: ["96", "72", "108", "84"],
          correct: 0,
          explanation: "6 × (6 − 2)² = 6 × 16 = 96."
        },
        {
          id: "TSR5_07",
          question: "A 6×6×6 painted cube is cut into 216 small cubes. How many have no painted face at all?",
          hint: "Interior block is (n − 2)³.",
          options: ["64", "48", "36", "27"],
          correct: 0,
          explanation: "(6 − 2)³ = 4³ = 64 cubes have no paint."
        },
        {
          id: "TSR5_08",
          question: "A 6×6×6 painted cube is cut into 216 small cubes. How many have exactly 3 painted faces?",
          hint: "Corner cubes always number the same regardless of cube size.",
          options: ["8", "12", "6", "24"],
          correct: 0,
          explanation: "A cube always has exactly 8 corners. So 8 cubes have 3 painted faces. (Check: 8 + 48 + 96 + 64 = 216 ✓)"
        },
        {
          id: "TSR5_09",
          question: "A 6×6×6 painted cube is cut into 216 small cubes. What is the total number of painted unit-faces across all cubes?",
          hint: "Each original face is a 6×6 grid of unit-faces.",
          options: ["216", "200", "192", "240"],
          correct: 0,
          explanation: "6 × 36 = 216. (Verify: 8×3 + 48×2 + 96×1 = 24 + 96 + 96 = 216 ✓)"
        },
        {
          id: "TSR5_10",
          question: "In a 10×10×10 painted cube cut into 1000 small cubes, how many have exactly 2 painted faces?",
          hint: "Formula: 12(n − 2) for edge cubes.",
          options: ["96", "120", "80", "108"],
          correct: 0,
          explanation: "12 × (10 − 2) = 12 × 8 = 96."
        },
        {
          id: "TSR5_11",
          question: "In a 10×10×10 painted cube, how many small cubes have exactly 1 painted face?",
          hint: "Formula: 6(n − 2)² for face-center cubes.",
          options: ["384", "360", "400", "480"],
          correct: 0,
          explanation: "6 × (10 − 2)² = 6 × 64 = 384."
        },
        {
          id: "TSR5_12",
          question: "In a 10×10×10 painted cube, how many small cubes have no painted face at all?",
          hint: "The unpainted interior is a cube of side (n − 2).",
          options: ["512", "480", "500", "343"],
          correct: 0,
          explanation: "(10 − 2)³ = 8³ = 512. (Check: 8 + 96 + 384 + 512 = 1000 ✓)"
        },
        {
          id: "TSR5_13",
          question: "Which of these shapes CAN be obtained as a cross-section of a cube?",
          hint: "A plane can intersect up to 6 faces of a cube. Think about symmetry — can you cut through 6 edge midpoints?",
          options: ["Regular hexagon", "Regular pentagon", "Regular octagon", "Ellipse"],
          correct: 0,
          explanation: "Cutting a cube through the midpoints of 6 edges produces a regular hexagon. A cube's symmetry cannot produce 5-fold shapes, octagons (max 6 sides), or curves."
        },
        {
          id: "TSR5_14",
          question: "What is the maximum number of sides a cross-section of a cube can have?",
          hint: "A cross-sectional polygon gains one side for each face the cutting plane intersects.",
          options: ["6", "4", "8", "12"],
          correct: 0,
          explanation: "A cube has 6 faces. A plane can intersect all 6, producing at most a hexagon (6 sides)."
        },
        {
          id: "TSR5_15",
          question: "A regular dodecahedron has 12 pentagonal faces. Each face has 5 edges, but each edge is shared by 2 faces. How many edges does it have?",
          hint: "Total edge-slots = 12 × 5, but each edge is counted twice.",
          options: ["30", "24", "36", "60"],
          correct: 0,
          explanation: "Edges = 12 × 5 / 2 = 30."
        },
        {
          id: "TSR5_16",
          question: "In a 7×7×7 painted cube cut into 343 small cubes, how many have exactly 2 painted faces?",
          hint: "Apply 12(n − 2) with n = 7.",
          options: ["60", "48", "72", "36"],
          correct: 0,
          explanation: "12 × (7 − 2) = 12 × 5 = 60."
        },
        {
          id: "TSR5_17",
          question: "In a 7×7×7 painted cube, how many small cubes have no painted face?",
          hint: "Interior cube: (n − 2)³.",
          options: ["125", "64", "100", "27"],
          correct: 0,
          explanation: "(7 − 2)³ = 5³ = 125."
        },
        {
          id: "TSR5_18",
          question: "For an n×n×n painted cube, the number of small cubes with exactly 1 painted face is 6(n − 2)². For which value of n does this equal 96?",
          hint: "Solve 6(n − 2)² = 96 → (n − 2)² = 16.",
          options: ["6", "5", "7", "8"],
          correct: 0,
          explanation: "6(n − 2)² = 96 → (n − 2)² = 16 → n − 2 = 4 → n = 6."
        },
        {
          id: "TSR5_19",
          question: "What is the maximum number of sides a cross-section of a triangular prism can have?",
          hint: "A triangular prism has 5 faces (2 triangles + 3 rectangles). Can a single plane intersect all 5?",
          options: ["5", "4", "3", "6"],
          correct: 0,
          explanation: "A plane tilted to intersect both triangular bases and all 3 rectangular faces produces a pentagonal cross-section — 5 is the maximum."
        },
        {
          id: "TSR5_20",
          question: "In a 7×7×7 painted cube, what is the total number of painted unit-faces across all 343 small cubes?",
          hint: "Each of the 6 original faces is a 7×7 grid.",
          options: ["294", "252", "300", "343"],
          correct: 0,
          explanation: "6 × 49 = 294. (Verify: 8×3 + 60×2 + 150×1 + 125×0 = 24 + 120 + 150 = 294 ✓)"
        }
      ]
    }
  ]
};
