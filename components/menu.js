class ScrollMenu extends HTMLElement {
  constructor() {
    super();

    this.summaryItemName = null
    this.biographyItemName = null
    this.essayItemName = null
    this.libruaryItemName = null
    this.linksItemName = null
    this.searchReportItemName = null
    this.individualSectionItemName = null

    this.summaryItemSelected = ``
    this.biographyItemSelected = ``
    this.essayItemSelected = ``
    this.libruaryItemSelected = ``
    this.linksItemSelected = ``
    this.searchReportItemSelected = ``
    this.individualSectionItemSelected = ``

    this.summaryItemHref = null
    this.biographyItemHref = null
    this.essayItemHref = null
    this.libruaryItemHref = null
    this.linksItemHref = null
    this.searchReportItemHref = null
    this.individualSectionItemHref = null
  }

  connectedCallback() {
    this.summaryItemName = this.getAttribute("summary_name");
    this.summaryItemHref = this.getAttribute("summary_href");
    this.biographyItemName = this.getAttribute("biography_name");
    this.biographyItemHref = this.getAttribute("biography_href");
    this.essayItemName = this.getAttribute("esssay_name");
    this.essayItemHref = this.getAttribute("esssay_href");
    this.libruaryItemName = this.getAttribute("libruary_name");
    this.libruaryItemHref = this.getAttribute("libruary_href");
    this.linksItemName = this.getAttribute("links_name");
    this.linksItemHref = this.getAttribute("links_href");
    this.searchReportItemName = this.getAttribute("search_report_name");
    this.searchReportItemHref = this.getAttribute("search_report_href");
    this.individualSectionItemName = this.getAttribute("individual_section_name");
    this.individualSectionItemHref = this.getAttribute("individual_section_href");
    
    if (this.summaryItemHref == null) {
      this.summaryItemSelected += `id="selected"`
      this.summaryItemHref = ``
    } 
    if (this.biographyItemHref == null) {
      this.biographyItemSelected += `id="selected"`
      this.biographyItemHref = ``
    }
    if (this.essayItemHref == null) {
      this.essayItemSelected += `id="selected"`
      this.essayItemHref = ``
    }
    if (this.libruaryItemHref == null) {
      this.libruaryItemSelected += `id="selected"`
      this.libruaryItemHref = ``
    }
    if (this.linksItemHref == null) {
      this.linksItemSelected += `id="selected"`
      this.linksItemHref = ``
    }
    if (this.searchReportItemHref == null) {
      this.searchReportItemSelected += `id="selected"`
      this.searchReportItemHref = ``
    }
    if (this.individualSectionItemHref == null) {
      this.individualSectionItemSelected += `id="selected"`
      this.individualSectionItemHref = ``
    }


    this.render();
  }

  render() {
    var content = ``
    if (this.summaryItemName != null) content += `<a href="${this.summaryItemHref}"${this.summaryItemSelected}>${this.summaryItemName}</a>`;
    if (this.biographyItemName != null) content += `<a href="${this.biographyItemHref}"${this.biographyItemSelected}>${this.biographyItemName}</a>`;
    if (this.essayItemName != null) content += `<a href="${this.essayItemHref}"${this.essayItemSelected}>${this.essayItemName}</a>`;
    if (this.libruaryItemName != null) content += `<a href="${this.libruaryItemHref}"${this.libruaryItemSelected}>${this.libruaryItemName}</a>`;
    if (this.linksItemName != null) content += `<a href="${this.linksItemHref}"${this.linksItemSelected}>${this.linksItemName}</a>`;
    if (this.searchReportItemName != null) content += `<a href="${this.searchReportItemHref}"${this.searchReportItemSelected}>${this.searchReportItemName}</a>`;
    if (this.individualSectionItemName != null) content += `<a href="${this.individualSectionItemHref}"${this.individualSectionItemSelected}>${this.individualSectionItemName}</a>`;

    this.innerHTML = `
    <style>
      .scroll-menu {
        overflow: auto;
        white-space: nowrap;
      }

      .scroll-menu a {
          display: inline-block;
          font-family: var(--caption-font);
          font-size: var(--common-font-size);
          color: var(--text-color);
          padding: var(--medium-indent);
          font- : normal;
          text-align: center;
          text-decoration: none;
          margin: 0;
      }

      .scroll-menu a#selected {
        font-weight: bold;
        border-bottom-width: 5px;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-style: solid;
        border-color: var(--secondary-color);
      }

      .scroll-menu a:hover {
        border-bottom-width: 5px;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-style: solid;
        border-color: var(--secondary-color);
      }
    </style>
    <div class="scroll-menu">${content}</div>`;
  }
}

customElements.define('scroll-menu', ScrollMenu);