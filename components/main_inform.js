class MainInform extends HTMLElement {
  constructor() {
    super();

    this.fullName = null
    this.faculty = null
    this.department = null
    this.speciality = null
    this.graduateWork = null
    this.scientificAdviser = null
    this.specialization = null
    this.is_root_folder = null
    this.is_two_level = null
  }

  connectedCallback() {
    this.fullName = this.getAttribute("full_name");
    this.faculty = this.getAttribute("faculty");
    this.department = this.getAttribute("department");
    this.speciality = this.getAttribute("speciality");
    this.graduateWork = this.getAttribute("graduate_work");
    this.scientificAdviser = this.getAttribute("scientific_adviser");
    this.specialization = this.getAttribute("specialization");
    this.is_root_folder = this.getAttribute("is_root_folder");
    this.is_two_level = this.getAttribute("is_two_level");

    this.render()
  }

  render(){
    var prefix = `../`
    if (this.is_root_folder == 'true') {prefix = ``}
    if (this.is_two_level == 'true') {prefix = `../../`}
    var content = ``
    if (this.fullName != null) {
      content += `<h1 id="main_content">${this.fullName}</h1>`;
    }
    if (this.faculty != null) {
      content += `<p><a href="https://donntu.ru/institutes/iknt">${this.faculty}</a></p>`;
    }
    if (this.department != null) {
      content += `<p><a href="http://pi.donntu.ru">${this.department}</a></p>`;
    }
    if (this.specialization != null) {
      content += `<p>${this.specialization}</p>`;
    }
    if (this.graduateWork != null) {
      content += `<p>${this.graduateWork}</p>`;
    }
    if (this.scientificAdviser != null) {
      content += `<p>${this.scientificAdviser}</p>`;
    }
    var style = `
    <style>


      .main_inform {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url(${prefix}images/background.jpg);
        padding: var(--big-indent);
      }

      .base_content {
        border-radius: var(--border-radius);
        backdrop-filter: blur(3px);
        padding: var(--medium-indent);
        max-width: 900px;
      }

      .base_content p,.base_content a {
        font-size: var(--pre-caption-font-size);
        font-family: var(--caption-font);
        color: var(--text-color);
        text-decoration: none;
      }
      .base_content p {
        margin: var(--normal-indent);
      }

      .base_content h1 {
        font-size: var(--caption-font-size);
        font-family: var(--font);
        color: var(--text-color);
        font-weight: bold;
  
        margin: var(--medium-indent) var(--normal-indent);
      }

      img.base_photo {
        width: 180px;
        height: 240px;
        margin-right: var(--medium-indent);
        border: var(--border-width) solid var(--primary-color);
        border-radius: var(--border-radius);
      }

      @media screen and (max-width: 700px) {
        .main_inform {
          display: block;
        }
        
        .main_inform p {
          display: block;
          text-align: center;
        }
        
        .main_inform {
          display: block;
          text-align: center;
        }

        img.base_photo {
          width: 153px;
          height: 204px;
          margin: 0 auto;
        }
      }
    </style>`
    this.innerHTML = `${style}<div class="main_inform"><a href="${prefix}borovikov-big.jpg"><img class="base_photo" src="${prefix}photo.jpg"/></a>
    <div class="base_content">${content}</div></div>`;
  }
}

customElements.define('main-inform-component', MainInform);