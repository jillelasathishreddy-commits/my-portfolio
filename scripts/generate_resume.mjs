import fs from "fs";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

async function createProfessionalResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter size: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Modern professional color palette
  const primaryColor = rgb(0.24, 0.22, 0.78);   // Royal Indigo #3d38c7
  const textColor = rgb(0.08, 0.12, 0.20);      // Deep Slate #141f33
  const secondaryColor = rgb(0.32, 0.40, 0.50); // Slate Grey #526680
  const ruleColor = rgb(0.82, 0.86, 0.92);      // Subtle Divider #d1dbe8
  const bulletColor = rgb(0.31, 0.27, 0.90);

  const marginX = 44;
  let y = height - 42;

  // Header - Name
  page.drawText("SATHISH REDDY JILLELA", {
    x: marginX,
    y: y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });
  y -= 18;

  // Header - Title
  page.drawText("Full-Stack Software Developer | AI & Machine Learning Enthusiast", {
    x: marginX,
    y: y,
    size: 11,
    font: fontBold,
    color: textColor,
  });
  y -= 16;

  // Contact Info Row
  const contactLine = "India  |  jillelasathishreddy@gmail.com  |  linkedin.com/in/sathish-reddy-jillela  |  github.com/jillelasathishreddy-commits";
  page.drawText(contactLine, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 12;

  // Header Divider
  page.drawLine({
    start: { x: marginX, y: y },
    end: { x: width - marginX, y: y },
    thickness: 1.5,
    color: primaryColor,
  });
  y -= 16;

  // Helper function for Section Headers
  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: width - marginX, y: y },
      thickness: 0.75,
      color: ruleColor,
    });
    y -= 13;
  }

  // Helper for bullet points
  function drawBullet(title, text, indent = marginX + 10) {
    page.drawCircle({
      x: indent - 4,
      y: y + 3,
      size: 2,
      color: bulletColor,
    });

    let currentX = indent;

    if (title) {
      page.drawText(title + ": ", {
        x: currentX,
        y: y,
        size: 9,
        font: fontBold,
        color: textColor,
      });
      currentX += fontBold.widthOfTextAtSize(title + ": ", 9);
    }

    const words = text.split(" ");
    let line = "";

    for (const word of words) {
      const testLine = line + (line ? " " : "") + word;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);

      if (currentX + testWidth > width - marginX) {
        page.drawText(line, {
          x: currentX,
          y: y,
          size: 9,
          font: fontRegular,
          color: textColor,
        });
        y -= 12;
        currentX = indent;
        line = word;
      } else {
        line = testLine;
      }
    }

    if (line) {
      page.drawText(line, {
        x: currentX,
        y: y,
        size: 9,
        font: fontRegular,
        color: textColor,
      });
      y -= 13;
    }
  }

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader("Professional Summary");
  const summaryText = "Proactive and detail-oriented Computer Science student and Full-Stack Developer with hands-on expertise building responsive modern web applications using React, Node.js, Express, and MongoDB. Passionate about artificial intelligence, Retrieval-Augmented Generation (RAG), and geospatial data concepts (GeoAI). Committed to engineering clean, accessible, high-performance code and continuously expanding technical acumen.";
  
  const summaryWords = summaryText.split(" ");
  let sLine = "";
  for (const word of summaryWords) {
    const testLine = sLine + (sLine ? " " : "") + word;
    if (fontRegular.widthOfTextAtSize(testLine, 9) > (width - marginX * 2)) {
      page.drawText(sLine, {
        x: marginX,
        y: y,
        size: 9,
        font: fontRegular,
        color: textColor,
      });
      y -= 12;
      sLine = word;
    } else {
      sLine = testLine;
    }
  }
  if (sLine) {
    page.drawText(sLine, {
      x: marginX,
      y: y,
      size: 9,
      font: fontRegular,
      color: textColor,
    });
    y -= 16;
  }

  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Skills");
  drawBullet("Frontend Development", "React.js 19, JavaScript (ES6+), HTML5, CSS3, Modern Responsive Layouts, Framer Motion");
  drawBullet("Backend & REST APIs", "Node.js, Express.js, RESTful Architecture, API Design, Authentication, Middleware");
  drawBullet("Databases & Storage", "MongoDB, Mongoose ODM, NoSQL Database Modeling, CRUD Operations");
  drawBullet("AI, ML & Geospatial", "Python, Retrieval-Augmented Generation (RAG), LLM Workflows, GIS Fundamentals, GeoAI Concepts");
  drawBullet("Developer Tools & Workflow", "Git, GitHub, Vite, Postman, npm, VS Code, Agile Pair Programming, Component Testing");
  y -= 4;

  // --- KEY PROJECTS ---
  drawSectionHeader("Featured Technical Projects");

  // Project 1
  page.drawText("Personal Portfolio & Interactive Showcase", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("React 19, Vite, Framer Motion, Vanilla CSS", {
    x: width - marginX - fontOblique.widthOfTextAtSize("React 19, Vite, Framer Motion, Vanilla CSS", 8.5),
    y: y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;
  drawBullet("", "Architected a responsive light-theme portfolio featuring fluid component animations, category filtering, and strict React 19 standards.");
  drawBullet("", "Engineered asynchronous contact workflow with live submission handling and automated email application fallback mechanism.");
  y -= 4;

  // Project 2
  page.drawText("Full-Stack E-Commerce Platform", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("MERN Stack (MongoDB, Express, React, Node.js)", {
    x: width - marginX - fontOblique.widthOfTextAtSize("MERN Stack (MongoDB, Express, React, Node.js)", 8.5),
    y: y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;
  drawBullet("", "Built a scalable web store incorporating user authentication, product catalog management, dynamic cart updates, and checkout flow.");
  drawBullet("", "Designed modular Express backend routes and MongoDB database schemas with Mongoose data validation.");
  y -= 4;

  // Project 3
  page.drawText("Interactive Programming Learning Application", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("React, Node.js, Express, REST APIs", {
    x: width - marginX - fontOblique.widthOfTextAtSize("React, Node.js, Express, REST APIs", 8.5),
    y: y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;
  drawBullet("", "Created an educational web app delivering structured lessons, interactive code quizzes, and milestone achievement tracking.");
  drawBullet("", "Implemented responsive user dashboard with clean component state management and optimized rendering.");
  y -= 4;

  // Project 4
  page.drawText("RAG Intelligent Learning Assistant & GeoAI Explorer", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("Python, LLMs, RAG, GIS Concepts", {
    x: width - marginX - fontOblique.widthOfTextAtSize("Python, LLMs, RAG, GIS Concepts", 8.5),
    y: y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;
  drawBullet("", "Constructed document-grounded AI assistant concepts leveraging vector retrieval and prompt templates to answer curriculum queries.");
  drawBullet("", "Explored geospatial datasets and GIS techniques to integrate spatial analysis with machine learning pipelines.");
  y -= 4;

  // --- EDUCATION ---
  drawSectionHeader("Education");
  page.drawText("Bachelor of Science in Computer Science (B.Sc. CS)", {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText("India  |  Expected Graduation: 2026", {
    x: width - marginX - fontRegular.widthOfTextAtSize("India  |  Expected Graduation: 2026", 9),
    y: y,
    size: 9,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 13;
  drawBullet("Relevant Coursework", "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Software Engineering Principles, Computer Networks");

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("public/resume.pdf", pdfBytes);
  console.log("Successfully generated professional PDF resume! Size:", pdfBytes.length, "bytes");
}

createProfessionalResume().catch(console.error);
