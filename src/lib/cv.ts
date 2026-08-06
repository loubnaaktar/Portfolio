/**
 * Génère un CV PDF (une page) à la volée, 100 % côté client,
 * puis déclenche son téléchargement.
 */

const ACCENT_MAP: Record<string, string> = {
  é: "\\351",
  è: "\\350",
  ê: "\\352",
  ë: "\\353",
  à: "\\340",
  â: "\\342",
  ô: "\\364",
  û: "\\373",
  ç: "\\347",
  î: "\\356",
  ù: "\\371",
  É: "\\311",
  À: "\\300",
  "’": "'",
  "—": "-",
  "|": "\\174",
};

function pdfEscape(text: string): string {
  return text
    .split("")
    .map((ch) =>
      ch === "(" || ch === ")" || ch === "\\"
        ? "\\" + ch
        : ACCENT_MAP[ch] ?? ch
    )
    .join("");
}

type Line = {
  x: number;
  y: number;
  size: number;
  bold?: boolean;
  color?: [number, number, number];
  text: string;
};

export function buildCvPdf(): Blob {
  const L: Line[] = [];
  let y = 800;
  const down = (n: number) => (y -= n);

  const push = (
    text: string,
    size: number,
    opts: { bold?: boolean; color?: [number, number, number]; x?: number; gap?: number } = {}
  ) => {
    L.push({
      x: opts.x ?? 56,
      y,
      size,
      bold: opts.bold,
      color: opts.color,
      text,
    });
    down(opts.gap ?? size + 8);
  };

  const section = (title: string) => {
    down(6);
    L.push({ x: 56, y: y + 2, size: 13, bold: true, color: [0.23, 0.51, 0.96], text: title });
    L.push({ x: 56, y: y - 5, size: 13, bold: true, color: [0.23, 0.51, 0.96], text: "" });
    down(16);
  };

  push("LOUBNA AKTAR", 24, { bold: true, color: [0.23, 0.51, 0.96], gap: 30 });
  push("Développeuse Full Stack Java | Spring Boot | React", 12, {
    color: [0.02, 0.71, 0.83],
    gap: 20,
  });
  push("loubnaakt13@gmail.com   ·   +212 6 61 23 45 67   ·   Rabat, Maroc", 9, {
    color: [0.38, 0.43, 0.52],
    gap: 16,
  });
  push("linkedin.com/in/loubna-aktar-706b6b33b   ·   github.com/loubnaaktar", 9, {
    color: [0.38, 0.43, 0.52],
    gap: 22,
  });

  section("PROFIL");
  push("Développeuse Full Stack passionnée par la création d'applications web modernes,", 10, { gap: 14 });
  push("performantes et sécurisées. Je conçois des solutions robustes en Java Spring Boot et", 10, { gap: 14 });
  push("développe des interfaces utilisateur intuitives avec React.", 10, { gap: 20 });

  section("FORMATION");
  push("2025 - 2026    Formation Full Stack - École Numérique Ahmed Al Hansali", 10, { bold: true, gap: 14 });
  push("Java, Spring Boot, Spring Security, React, MySQL, Docker, API REST sécurisées (JWT).", 9, {
    color: [0.45, 0.51, 0.6],
    gap: 18,
  });
  push("2023 - 2024    Licence en Archéologie Islamique - INSAP Rabat", 10, { bold: true, gap: 14 });
  push("Esprit d'analyse, rigueur méthodologique, capacité de recherche et de synthèse.", 9, {
    color: [0.45, 0.51, 0.6],
    gap: 20,
  });

  section("COMPÉTENCES TECHNIQUES");
  push("Backend : Java 21, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST API, Maven", 9.5, { gap: 14 });
  push("Frontend : React, JavaScript, HTML5, CSS3", 9.5, { gap: 14 });
  push("Base de données : MySQL   ·   DevOps : Docker, Git, GitHub", 9.5, { gap: 14 });
  push("Outils : IntelliJ IDEA, VS Code, Swagger, Postman, Figma", 9.5, { gap: 20 });

  section("PROJETS");
  push("HealthCare+ — API REST de gestion médicale", 10, { bold: true, gap: 14 });
  push("Java 21, Spring Boot, Spring Security, JWT, DTO, MapStruct, Flyway, Docker, Swagger, MySQL.", 9, {
    color: [0.45, 0.51, 0.6],
    gap: 18,
  });
  push("XTrade — Simulateur de plateforme de trading", 10, { bold: true, gap: 14 });
  push("Gestion des traders, portefeuilles, transactions et statistiques de performance (Streams API, POO).", 9, {
    color: [0.45, 0.51, 0.6],
    gap: 18,
  });
  push("Gestion Bancaire — Application console orientée objet", 10, { bold: true, gap: 14 });
  push("Dépôt, retrait, transfert d'argent et architecture orientée objet en Java.", 9, {
    color: [0.45, 0.51, 0.6],
    gap: 20,
  });

  section("LANGUES");
  push("Arabe (langue maternelle)   ·   Français (courant)   ·   Anglais (technique)", 10, { gap: 16 });

  /* ---- Assemblage du PDF ---- */
  let stream = "";
  for (const line of L) {
    if (line.color) {
      stream += `${line.color[0]} ${line.color[1]} ${line.color[2]} rg\n`;
    } else {
      stream += `0.1 0.12 0.16 rg\n`;
    }
    stream += `BT /${line.bold ? "F2" : "F1"} ${line.size} Tf ${line.x} ${line.y} Td (${pdfEscape(
      line.text
    )}) Tj ET\n`;
  }

  const objects: string[] = [];
  objects.push(`<< /Type /Catalog /Pages 2 0 R >>`);
  objects.push(`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
  objects.push(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`
  );
  objects.push(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`);
  objects.push(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`);
  objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((body, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += `0000000000 65535 f \n`;
  for (const off of offsets) {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  const bytes = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i++) bytes[i] = pdf.charCodeAt(i) & 0xff;
  return new Blob([bytes], { type: "application/pdf" });
}

export async function downloadCv(): Promise<void> {
  const res = await fetch("images/fichier/CV-Loubna-AKTAR-Full-Stack.pdf");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CV-Loubna-Aktar-FullStack.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
