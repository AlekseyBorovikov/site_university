class FooterContent extends HTMLElement {
  constructor() {
    super();
    this.isRootFolder = false;
    this.rootFolder = `../`;
    this.contacts_caption = null;
    this.is_two_level = null
  }

  connectedCallback() {
    this.isRootFolder = this.getAttribute("is_root_folder");
    this.contacts_caption = this.getAttribute("contacts_caption");
    this.is_two_level = this.getAttribute("is_two_level");

    if(this.contacts_caption == null) this.contacts_caption = `Контакты`
    this.render();
  }

  render() {
    if(this.isRootFolder == "true") {
      this.rootFolder = ``
    }
    if (this.is_two_level == 'true') {this.rootFolder = `../../`}
    this.innerHTML = `
      <style>
        .contacts {
          display: inline-block;
        }

        .contacts_icons {
          display: inline-block;
          margin: var(--small-indent);
        }

        .icon {
          padding: var(--small-indent);
        }

        .caption {
          width: 100%;
          text-align: center;
          font-family: var(--caption-font);
          font-size: var(--common-font-size);

          color: var(--text-color);
          margin: var(--small-indent) 0px;
        }

        img {
          width: var(--icon_size);
        }
      </style>


      <div class="contacts">
        <div class="caption">${this.contacts_caption}</div>
        <div class="contacts_icons">
            <a class="icon" href="https://vk.com/aleksey_borovikov00"><img id="vk" src="${this.rootFolder}images/vk-32.png"></a>
            <a class="icon" href="mailto:aleksey.borovikov.00@mail.ru"><img id="email" src="${this.rootFolder}images/email-32.png"></a>
            <a class="icon" href="https://t.me/alboiv"><img id="telegram" src="${this.rootFolder}images/telegram-32.png"></a>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-content', FooterContent);