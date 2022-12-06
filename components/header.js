class HeaderContent extends HTMLElement {
  constructor() {
    super();

    this.communityName = null;
    this.universeName = null;
    this.ru_language = null;
    this.eng_language = null;
    this.uk_language = null;
  }

  connectedCallback() {
    this.communityName = this.getAttribute("community_name");
    this.universeName = this.getAttribute("universe_name");
    this.ru_language = this.getAttribute("ru-lang");
    this.eng_language = this.getAttribute("eng-lang");
    this.uk_language = this.getAttribute("uk-lang");

    this.render();
  }

  render() {
    var content = ``;
    if(this.communityName != null) content += `<div class="community flex-left"><a href="http://masters.donntu.ru">&#10094; ${this.communityName}</a></div>`;
    if(this.universeName != null) content += `<a class="logo flex-center" href="http://donntu.ru">${this.universeName}</a>`;
    content += `<div class="language flex-right">`;
    if(this.ru_language == 'true') content += `<a href="index.html">RU</a>`
    if(this.eng_language == 'true') content += `<a href="indexe.html">EN</a>`
    if(this.uk_language == 'true') content += `<a href="indexu.html">UK</a>`
    content += `</div>`;
    this.innerHTML = `
    <style>
      .community, .language, .logo {
        width: 100%;
        padding: var(--normal-indent);
        text-decoration: none;
        color: var(--text-color);
      }

      .community, .language {
        font-size: var(--common-font-size);
        font-family: sans-serif;
      }

      .logo {
        font-size: var(--caption-font-size);
        font-weight: bold;
        font-family: var(--caption-font);
        -webkit-text-stroke: 1px var(--primary-color);
      }

      .language a, .community a, .language a{
        text-decoration: none;
        color: var(--text-color);
        padding: var(--medium-indent);
      }
    </style>

    ${content}`;
  }
}

customElements.define('header-content', HeaderContent);