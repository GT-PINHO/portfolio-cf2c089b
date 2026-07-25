"""Gera public/Curriculo_David_Pinho.pdf no visual do Docs (Calibri), com link público correto."""

from __future__ import annotations

import os

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUT = os.path.join(ROOT, "public", "Curriculo_David_Pinho.pdf")
PORTFOLIO_URL = "https://portfolio-david-pinho.vercel.app/"
PORTFOLIO_LABEL = "portfolio-david-pinho.vercel.app"


def resolve_fonts() -> tuple[str, str]:
    candidates = [
        (r"C:\Windows\Fonts\calibri.ttf", r"C:\Windows\Fonts\calibrib.ttf"),
        (r"C:\Windows\Fonts\arial.ttf", r"C:\Windows\Fonts\arialbd.ttf"),
    ]
    for reg, bold in candidates:
        if os.path.exists(reg) and os.path.exists(bold):
            pdfmetrics.registerFont(TTFont("CVSans", reg))
            pdfmetrics.registerFont(TTFont("CVSans-Bold", bold))
            return "CVSans", "CVSans-Bold"
    return "Helvetica", "Helvetica-Bold"


def shaded_bar(text: str, style: ParagraphStyle, bg: HexColor, width: float) -> Table:
    table = Table([[Paragraph(text, style)]], colWidths=[width])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), bg),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def main() -> None:
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    font_regular, font_bold = resolve_fonts()

    # Paleta alinhada ao Docs
    ink = HexColor("#2E2E2E")
    soft = HexColor("#333333")
    muted = HexColor("#7A7A7A")
    link_blue = HexColor("#1E4FA3")
    section_bg = HexColor("#E4E4E4")
    portfolio_bg = HexColor("#E8F0FD")

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Name",
            fontName=font_bold,
            fontSize=21,
            leading=24,
            textColor=ink,
            alignment=TA_CENTER,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Role",
            fontName=font_regular,
            fontSize=11,
            leading=13,
            textColor=HexColor("#3B3B3B"),
            alignment=TA_CENTER,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ContactLine",
            fontName=font_regular,
            fontSize=9,
            leading=11,
            textColor=soft,
            alignment=TA_LEFT,
            spaceAfter=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="PortfolioLine",
            fontName=font_bold,
            fontSize=9,
            leading=12,
            textColor=link_blue,
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            fontName=font_bold,
            fontSize=11,
            leading=14,
            textColor=ink,
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            fontName=font_regular,
            fontSize=9,
            leading=11.5,
            textColor=soft,
            alignment=TA_LEFT,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="JobTitle",
            fontName=font_bold,
            fontSize=10.5,
            leading=12.5,
            textColor=ink,
            spaceBefore=0,
            spaceAfter=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="JobOrg",
            fontName=font_regular,
            fontSize=9,
            leading=11,
            textColor=soft,
            spaceAfter=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="JobMeta",
            fontName=font_regular,
            fontSize=8.5,
            leading=10.5,
            textColor=muted,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CvBullet",
            fontName=font_regular,
            fontSize=9,
            leading=11.2,
            textColor=soft,
        )
    )

    doc = SimpleDocTemplate(
        OUT,
        pagesize=A4,
        leftMargin=0.53 * 72,
        rightMargin=0.53 * 72,
        topMargin=0.45 * 72,
        bottomMargin=0.50 * 72,
        title="Currículo — David Edson da Silva Pinho",
        author="David Pinho",
    )
    content_width = A4[0] - doc.leftMargin - doc.rightMargin

    story: list = []
    story.append(Paragraph("DAVID EDSON DA SILVA PINHO", styles["Name"]))
    story.append(
        Paragraph(
            "Gestor de Tráfego Pago · Desenvolvedor de Sistemas com IA",
            styles["Role"],
        )
    )
    story.append(Paragraph("<b>Americana – SP</b>", styles["ContactLine"]))
    story.append(Paragraph("<b>Celular:</b> (19) 99750-1584", styles["ContactLine"]))
    story.append(
        Paragraph(
            '<b>E-mail:</b> <link href="mailto:davidpinho.st@gmail.com">davidpinho.st@gmail.com</link>',
            styles["ContactLine"],
        )
    )
    story.append(
        Paragraph(
            '<b>LinkedIn:</b> <link href="https://linkedin.com/in/odavidpinho" color="#1E4FA3">'
            "<u>linkedin.com/in/odavidpinho</u></link>",
            styles["ContactLine"],
        )
    )
    story.append(
        Paragraph(
            '<b>Instagram Profissional:</b> <link href="https://instagram.com/odavidpinho" color="#1E4FA3">'
            "<u>instagram.com/odavidpinho</u></link>",
            styles["ContactLine"],
        )
    )
    story.append(Spacer(1, 3))
    story.append(
        shaded_bar(
            f'<link href="{PORTFOLIO_URL}" color="#1E4FA3">'
            f"<u>Portfólio: {PORTFOLIO_LABEL}</u> ↗</link>",
            styles["PortfolioLine"],
            portfolio_bg,
            content_width,
        )
    )
    story.append(Spacer(1, 6))

    def section(title: str) -> None:
        story.append(shaded_bar(title, styles["Section"], section_bg, content_width))
        story.append(Spacer(1, 4))

    def bullets(items: list[str], space_after: float = 2) -> None:
        flow = [
            ListItem(
                Paragraph(item, styles["CvBullet"]),
                leftIndent=8,
                bulletColor=soft,
                value="•",
                spaceAfter=1.5,
            )
            for item in items
        ]
        story.append(
            ListFlowable(
                flow,
                bulletType="bullet",
                start="•",
                leftIndent=6,
                spaceBefore=0,
                spaceAfter=space_after,
            )
        )

    section("RESUMO PROFISSIONAL")
    story.append(
        Paragraph(
            "Gestor de tráfego pago com mais de 3 anos de experiência em campanhas nacionais "
            "de educação e eventos. Especializado em Meta Ads e na geração de leads "
            "qualificados com otimização de CPL e ROAS, atuando em operações de médio e alto "
            "volume (orçamento semanal de até R$98 mil), a partir de visão de funil, testes "
            "contínuos, segmentação e leitura de dados. Diferencial técnico: implemento "
            "rastreamento server-side (GTM, API de Conversão, Stape), construo dashboards "
            "próprios de performance e desenvolvo sistemas e automações com IA que elevam a "
            "qualidade do sinal e a clareza operacional, incluindo fluxos em hardcode que "
            "levam o lead com UTM até o CRM (HubSpot e Nectar) da equipe de inside Sales.",
            styles["Body"],
        )
    )

    section("EXPERIÊNCIA PROFISSIONAL")
    story.append(Paragraph("Gestor de Tráfego Pago", styles["JobTitle"]))
    story.append(
        Paragraph(
            "Grupo Legacy Eco (IAM Treinamentos, Liberty Mentoria e Legacy Coffee)",
            styles["JobOrg"],
        )
    )
    story.append(Paragraph("PJ · dez/2024 – atual", styles["JobMeta"]))
    bullets(
        [
            "Gestão de Meta Ads com orçamento semanal de R$68 mil a R$98 mil (operação nacional).",
            "Mais de 21 mil leads sob gestão direta, com CPL de R$13.",
            "Contribuição em operação que somou +630 mil leads e R$7 mi em mídia investida.",
            "Rastreamento server-side (GTM/CAPI/Stape) e automações UTM → CRM (HubSpot/Nectar) para inside Sales.",
            "Dashboards próprios e sistemas com IA para análise de criativo, copy e tomada de decisão.",
        ],
        space_after=6,
    )

    story.append(Paragraph("Assistente de Tráfego Digital", styles["JobTitle"]))
    story.append(
        Paragraph(
            "Intencional Negócios Digitais Ltda. · Americana – SP",
            styles["JobOrg"],
        )
    )
    story.append(Paragraph("CLT · fev./2023 – nov/2024", styles["JobMeta"]))
    bullets(
        [
            "Meta Ads de ponta a ponta para ~40 eventos/mês em todo o Brasil.",
            "Mais de 240 mil leads com CPL médio de R$8.",
            "Campanhas por cidade e etapa de funil, com escala progressiva de verba.",
            "Públicos segmentados, lookalikes, remarketing e auditoria de sinal via GTM.",
        ],
        space_after=6,
    )

    section("PROJETOS")
    bullets(
        [
            "Legacy Growth Dashboard: painel unificado de marketing e vendas "
            "(investimento, CPL, CAC, ticket médio, funil). Supabase.",
            "Automações UTM → CRM &amp; Produtos: fluxos em hardcode e integrações "
            "HubSpot/Nectar/ManyChat por estratégia de lançamento. Node.js · Webhooks · APIs REST.",
            "pinho-skills: plugin open-source de growth-ops (leilão, unit economics, "
            "rastreamento, CRO).",
        ],
        space_after=6,
    )

    section("COMPETÊNCIAS TÉCNICAS")
    bullets(
        [
            "Tráfego &amp; Performance: Meta Ads, funis, testes A/B, lookalikes, "
            "remarketing, GTM, CAPI, Stape, server-side. Google Ads (Search/PMax, em "
            "desenvolvimento). TikTok Ads (básico).",
            "KPIs: CPL, CTR, CPC, CPM, ROAS, CAC, taxa de comparecimento e conversão.",
            "CRM &amp; Automação: HubSpot, Nectar CRM, ManyChat, Node.js, TypeScript, "
            "Webhooks, UTM tracking, EasyPanel.",
            "Dados &amp; IA: Supabase, Vercel, Claude, Cursor, sistemas com IA.",
        ],
        space_after=6,
    )

    section("DESENVOLVIMENTO PROFISSIONAL")
    bullets(
        [
            "Base metodológica em performance e Meta Ads: Comunidade Sobral de Tráfego.",
            "GTM Web e Server-Side: rastreamento e qualidade de sinal.",
            "Google Ads: certificação Skillshop (Search), em andamento.",
            "Aprendizado contínuo desde 2023: tráfego, funis, IA aplicada e escalabilidade.",
        ],
        space_after=3,
    )

    doc.build(story)
    print(f"PDF_OK {OUT} ({os.path.getsize(OUT)} bytes)")


if __name__ == "__main__":
    main()
