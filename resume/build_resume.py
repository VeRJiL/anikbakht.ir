# -*- coding: utf-8 -*-
"""
Build Arash Nikbakht's resume as an ATS-friendly .docx and a matching .pdf
from the single source in resume_data.py.

    python resume/build_resume.py

Outputs (next to this script):
    Arash Nikbakht - PHP Go Backend Engineer.docx
    Arash Nikbakht - PHP Go Backend Engineer.pdf
"""

import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_data as D  # noqa: E402

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
BASENAME = "Arash Nikbakht - PHP Go Backend Engineer"

INK = (0x11, 0x18, 0x27)      # near-black body text
MUTED = (0x4B, 0x55, 0x63)    # secondary text
ACCENT = (0x5B, 0x4B, 0x9E)   # PHP-ish indigo, used for company / headings rule
RULE = (0xCB, 0xD2, 0xDB)

BOLD_RE = re.compile(r"\*\*(.+?)\*\*")


def split_bold(text):
    """'a **b** c' -> [('a ', False), ('b', True), (' c', False)]"""
    parts, pos = [], 0
    for m in BOLD_RE.finditer(text):
        if m.start() > pos:
            parts.append((text[pos:m.start()], False))
        parts.append((m.group(1), True))
        pos = m.end()
    if pos < len(text):
        parts.append((text[pos:], False))
    return parts or [(text, False)]


def plain(text):
    return BOLD_RE.sub(r"\1", text)


# --------------------------------------------------------------------------
# DOCX
# --------------------------------------------------------------------------
def build_docx(path):
    from docx import Document
    from docx.shared import Pt, RGBColor, Inches
    from docx.enum.text import WD_ALIGN_PARAGRAPH
    from docx.enum.table import WD_TABLE_ALIGNMENT
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement

    doc = Document()

    for section in doc.sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.6)
        section.right_margin = Inches(0.6)

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(9.5)
    normal.font.color.rgb = RGBColor(*INK)
    normal.element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")
    normal.paragraph_format.space_after = Pt(0)
    normal.paragraph_format.line_spacing = 1.08

    def para(space_before=0, space_after=0, align=None):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(space_before)
        p.paragraph_format.space_after = Pt(space_after)
        if align is not None:
            p.alignment = align
        return p

    def run(p, text, size=9.5, bold=False, color=INK, caps=False, spacing=None):
        r = p.add_run(text)
        r.font.size = Pt(size)
        r.bold = bold
        r.font.color.rgb = RGBColor(*color)
        if caps:
            r.font.all_caps = True
        if spacing:
            rPr = r._element.get_or_add_rPr()
            sp = OxmlElement("w:spacing")
            sp.set(qn("w:val"), str(int(spacing * 20)))
            rPr.append(sp)
        return r

    def rich(p, text, size=9.5, color=INK, base_bold=False):
        for chunk, is_bold in split_bold(text):
            run(p, chunk, size=size, bold=(is_bold or base_bold), color=color)

    def bottom_border(p, color="5B4B9E", size=8):
        pPr = p._p.get_or_add_pPr()
        borders = OxmlElement("w:pBdr")
        bottom = OxmlElement("w:bottom")
        bottom.set(qn("w:val"), "single")
        bottom.set(qn("w:sz"), str(size))
        bottom.set(qn("w:space"), "2")
        bottom.set(qn("w:color"), color)
        borders.append(bottom)
        pPr.append(borders)

    def heading(text):
        p = para(space_before=10, space_after=5)
        run(p, text, size=10.5, bold=True, color=ACCENT, caps=True, spacing=1.1)
        bottom_border(p)

    # ---- header ----------------------------------------------------------
    p = para(align=WD_ALIGN_PARAGRAPH.CENTER)
    run(p, D.NAME, size=23, bold=True, color=INK, spacing=0.6)

    p = para(space_after=4, align=WD_ALIGN_PARAGRAPH.CENTER)
    rich(p, D.TITLE, size=11, color=ACCENT)

    p = para(space_after=2, align=WD_ALIGN_PARAGRAPH.CENTER)
    run(p, "   |   ".join(v for _, v, _ in D.CONTACT), size=9, color=MUTED)
    bottom_border(p, color="CBD2DB", size=6)

    # ---- summary ---------------------------------------------------------
    heading("Professional Summary")
    p = para(space_after=2)
    p.paragraph_format.line_spacing = 1.16
    rich(p, D.SUMMARY)

    # ---- experience ------------------------------------------------------
    heading("Work Experience")
    for i, job in enumerate(D.EXPERIENCE):
        p = para(space_before=(0 if i == 0 else 7), space_after=1)
        tabs = p.paragraph_format.tab_stops
        tabs.add_tab_stop(Inches(7.3), 2)  # right-aligned tab stop
        run(p, job["role"], size=10.5, bold=True)
        run(p, "  ·  ", size=10.5, color=RULE)
        run(p, job["company"], size=10.5, bold=True, color=ACCENT)
        run(p, "\t" + job["dates"] + "  ·  " + job["location"], size=8.8, color=MUTED)

        for b in job["bullets"]:
            bp = doc.add_paragraph(style="List Bullet")
            bp.paragraph_format.space_before = Pt(1)
            bp.paragraph_format.space_after = Pt(0)
            bp.paragraph_format.left_indent = Inches(0.22)
            bp.paragraph_format.first_line_indent = Inches(-0.14)
            bp.paragraph_format.line_spacing = 1.05
            rich(bp, b, size=9.3)

    # ---- skills ----------------------------------------------------------
    heading("Skills")
    table = doc.add_table(rows=0, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.LEFT
    table.autofit = False
    for label, value in D.SKILLS:
        row = table.add_row().cells
        row[0].width = Inches(1.35)
        row[1].width = Inches(5.95)
        lp = row[0].paragraphs[0]
        lp.paragraph_format.space_after = Pt(1.5)
        run(lp, label, size=9.3, bold=True)
        vp = row[1].paragraphs[0]
        vp.paragraph_format.space_after = Pt(1.5)
        rich(vp, value, size=9.3)

    # ---- education + languages ------------------------------------------
    heading("Education")
    p = para()
    run(p, D.EDUCATION["degree"], size=10, bold=True)
    run(p, "  ·  ", size=10, color=RULE)
    run(p, D.EDUCATION["school"], size=10, bold=True, color=ACCENT)
    run(p, "   " + D.EDUCATION["dates"], size=8.8, color=MUTED)

    heading("Languages")
    p = para()
    run(p, D.LANGUAGES, size=9.3)

    doc.save(path)
    return path


# --------------------------------------------------------------------------
# PDF
# --------------------------------------------------------------------------
def build_pdf(path):
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.units import mm
    from reportlab.lib.colors import Color
    from reportlab.pdfgen import canvas as pdfcanvas
    from reportlab.pdfbase.pdfmetrics import stringWidth

    def col(rgb, alpha=1):
        return Color(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, alpha)

    W, H = A4
    ML, MR, MT, MB = 15 * mm, 15 * mm, 13 * mm, 13 * mm
    CW = W - ML - MR

    REG, BLD = "Helvetica", "Helvetica-Bold"

    c = pdfcanvas.Canvas(path, pagesize=A4)
    c.setTitle(BASENAME)
    c.setAuthor(D.NAME)
    c.setSubject("Senior Backend Engineer - PHP / Laravel, Go")
    c.setKeywords(
        "PHP, Laravel, Go, Golang, Gin, GORM, Backend Engineer, Microservices, "
        "SOA, Redis, RabbitMQ, MySQL, PostgreSQL, REST, gRPC, GraphQL, Docker, CI/CD, NestJS"
    )

    state = {"y": H - MT}

    def need(h):
        if state["y"] - h < MB:
            c.showPage()
            state["y"] = H - MT

    def tokenize(text, base_bold=False):
        """-> list of words; each word is a list of (piece, bold) parts that must
        stay glued together, so '(**PHP**' keeps its exact spacing."""
        words, cur = [], []
        for chunk, is_bold in split_bold(text):
            bold = is_bold or base_bold
            for part in re.split(r"(\s+)", chunk):
                if not part:
                    continue
                if part.isspace():
                    if cur:
                        words.append(cur)
                        cur = []
                else:
                    cur.append((part, bold))
        if cur:
            words.append(cur)
        return words

    def word_width(word, size):
        return sum(stringWidth(p, BLD if b else REG, size) for p, b in word)

    def line_width(line, size):
        space_w = stringWidth(" ", REG, size)
        return sum(word_width(w, size) for w in line) + space_w * max(len(line) - 1, 0)

    def wrap_rich(text, size, width, base_bold=False):
        """Wrap **bold** markup into lines of words."""
        lines, cur, cur_w = [], [], 0.0
        space_w = stringWidth(" ", REG, size)
        for word in tokenize(text, base_bold):
            fw = word_width(word, size)
            add = fw if not cur else fw + space_w
            if cur and cur_w + add > width:
                lines.append(cur)
                cur, cur_w = [word], fw
            else:
                cur.append(word)
                cur_w += add
        if cur:
            lines.append(cur)
        return lines

    def draw_line(line, x, y, size, color):
        c.setFillColor(color)
        space_w = stringWidth(" ", REG, size)
        for i, word in enumerate(line):
            if i:
                x += space_w
            for piece, bold in word:
                font = BLD if bold else REG
                c.setFont(font, size)
                c.drawString(x, y, piece)
                x += stringWidth(piece, font, size)

    def rich_block(text, size, x, width, leading, color=col(INK), base_bold=False):
        lines = wrap_rich(text, size, width, base_bold)
        need(len(lines) * leading)
        for line in lines:
            draw_line(line, x, state["y"] - size, size, color)
            state["y"] -= leading
        return lines

    def heading(text):
        need(16)
        state["y"] -= 6.5
        c.setFont(BLD, 9.2)
        c.setFillColor(col(ACCENT))
        # A text object (not the canvas) exposes character spacing, and real
        # spacing keeps the heading extractable by ATS parsers. drawText leaves
        # the char-space set on the canvas, so save/restore around it -
        # otherwise every later run on the page inherits the tracking.
        c.saveState()
        t = c.beginText(ML, state["y"] - 9)
        t.setFont(BLD, 9.2)
        t.setFillColor(col(ACCENT))
        t.setCharSpace(1.6)
        t.textOut(text.upper())
        c.drawText(t)
        c.restoreState()
        c._charSpace = 0
        state["y"] -= 12.5
        c.setStrokeColor(col(ACCENT))
        c.setLineWidth(0.9)
        c.line(ML, state["y"], ML + CW, state["y"])
        state["y"] -= 8

    # ---- header ----------------------------------------------------------
    c.setFont(BLD, 25)
    c.setFillColor(col(INK))
    c.drawCentredString(W / 2, state["y"] - 21, D.NAME)
    state["y"] -= 28

    title_lines = wrap_rich(D.TITLE, 11.5, CW)
    for line in title_lines:
        lw = line_width(line, 11.5)
        draw_line(line, (W - lw) / 2, state["y"] - 11.5, 11.5, col(ACCENT))
        state["y"] -= 15

    contact = "     |     ".join(v for _, v, _ in D.CONTACT)
    c.setFont(REG, 9)
    c.setFillColor(col(MUTED))
    c.drawCentredString(W / 2, state["y"] - 8, contact)
    state["y"] -= 15
    c.setStrokeColor(col(RULE))
    c.setLineWidth(0.8)
    c.line(ML, state["y"], ML + CW, state["y"])
    state["y"] -= 3

    # link annotations over the contact line
    cw_total = stringWidth(contact, REG, 9)
    cx = W / 2 - cw_total / 2
    sep_w = stringWidth("     |     ", REG, 9)
    for _, value, href in D.CONTACT:
        vw = stringWidth(value, REG, 9)
        c.linkURL(href, (cx, state["y"] + 10, cx + vw, state["y"] + 21), relative=0)
        cx += vw + sep_w

    # ---- summary ---------------------------------------------------------
    heading("Professional Summary")
    rich_block(D.SUMMARY, 9.4, ML, CW, 12.4)

    # ---- experience ------------------------------------------------------
    heading("Work Experience")
    for i, job in enumerate(D.EXPERIENCE):
        need(38)
        if i:
            state["y"] -= 7
        y = state["y"] - 10.5
        c.setFont(BLD, 10.8)
        c.setFillColor(col(INK))
        x = ML
        c.drawString(x, y, job["role"])
        x += stringWidth(job["role"], BLD, 10.8)
        c.setFillColor(col(RULE))
        c.setFont(REG, 10.8)
        c.drawString(x, y, "  |  ")
        x += stringWidth("  |  ", REG, 10.8)
        c.setFont(BLD, 10.8)
        c.setFillColor(col(ACCENT))
        c.drawString(x, y, job["company"])

        meta = job["dates"] + "  ·  " + job["location"]
        c.setFont(REG, 8.6)
        c.setFillColor(col(MUTED))
        c.drawRightString(ML + CW, y + 0.8, meta)
        state["y"] -= 15

        for b in job["bullets"]:
            lines = wrap_rich(b, 9.2, CW - 11)
            need(len(lines) * 11.4 + 2)
            c.setFillColor(col(ACCENT))
            c.setFont(REG, 9.2)
            c.drawString(ML + 2, state["y"] - 9.2, "•")
            for line in lines:
                draw_line(line, ML + 11, state["y"] - 9.2, 9.2, col(INK))
                state["y"] -= 11.4
            state["y"] -= 1.4

    # ---- skills ----------------------------------------------------------
    heading("Skills")
    label_w = 31 * mm
    for label, value in D.SKILLS:
        lines = wrap_rich(value, 9.2, CW - label_w)
        need(len(lines) * 11.4 + 2)
        c.setFont(BLD, 9.2)
        c.setFillColor(col(INK))
        c.drawString(ML, state["y"] - 9.2, label)
        for line in lines:
            draw_line(line, ML + label_w, state["y"] - 9.2, 9.2, col(INK))
            state["y"] -= 11.4
        state["y"] -= 1.6

    # ---- education -------------------------------------------------------
    heading("Education")
    need(16)
    y = state["y"] - 10
    c.setFont(BLD, 10)
    c.setFillColor(col(INK))
    c.drawString(ML, y, D.EDUCATION["degree"])
    x = ML + stringWidth(D.EDUCATION["degree"], BLD, 10)
    c.setFont(REG, 10)
    c.setFillColor(col(RULE))
    c.drawString(x, y, "  |  ")
    x += stringWidth("  |  ", REG, 10)
    c.setFont(BLD, 10)
    c.setFillColor(col(ACCENT))
    c.drawString(x, y, D.EDUCATION["school"])
    c.setFont(REG, 8.6)
    c.setFillColor(col(MUTED))
    c.drawRightString(ML + CW, y + 0.8, D.EDUCATION["dates"])
    state["y"] -= 14

    # ---- languages -------------------------------------------------------
    heading("Languages")
    rich_block(D.LANGUAGES, 9.2, ML, CW, 11.4)

    c.save()
    return path


if __name__ == "__main__":
    docx_path = build_docx(os.path.join(OUT_DIR, BASENAME + ".docx"))
    pdf_path = build_pdf(os.path.join(OUT_DIR, BASENAME + ".pdf"))
    print("wrote:", docx_path)
    print("wrote:", pdf_path)
