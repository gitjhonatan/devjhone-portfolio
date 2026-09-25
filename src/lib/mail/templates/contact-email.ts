import { ContactEmailData } from "@/lib/validations/contact";

const COLORS = {
    primary: "#1c1c22",
    accent: "#00ff99",
    surface: "#24242b",
    border: "#33333a",
    text: "#ffffff",
    muted: "#a0a0a8",
    message: "#e5e5e5",
    footer: "#77777f",
};

const createContactEmail = (data: ContactEmailData) => {
    const subject = `Novo contato pelo portfólio - ${data.subject}`;

    const html = `
    <div
      style="
        margin: 0;
        padding: 40px 20px;
        background-color: ${COLORS.primary};
        font-family: Arial, Helvetica, sans-serif;
        color: ${COLORS.text};
      "
    >
      <div
        style="
          max-width: 600px;
          margin: 0 auto;
          background-color: ${COLORS.primary};
          border: 1px solid ${COLORS.border};
          border-radius: 12px;
          overflow: hidden;
        "
      >
        <div
          style="
            padding: 24px 30px;
            border-bottom: 1px solid ${COLORS.border};
          "
        >
          <h1
            style="
              margin: 0;
              font-size: 24px;
              color: ${COLORS.accent};
            "
          >
            Novo contato pelo portfólio
          </h1>

          <p
            style="
              margin: 8px 0 0;
              font-size: 14px;
              color: ${COLORS.muted};
            "
          >
            Você recebeu uma nova mensagem através do formulário de contato.
          </p>
        </div>

        <div style="padding: 30px;">
          <div
            style="
              margin-bottom: 24px;
              padding: 18px;
              background-color: ${COLORS.surface};
              border-radius: 8px;
            "
          >
            <p style="margin: 0 0 12px;">
              <strong style="color: ${COLORS.accent};">
                Nome
              </strong>
              <br />
              <span style="color: ${COLORS.text};">
                ${data.firstName} ${data.lastName}
              </span>
            </p>

            <p style="margin: 0 0 12px;">
              <strong style="color: ${COLORS.accent};">
                E-mail
              </strong>
              <br />
              <span style="color: ${COLORS.text};">
                ${data.email}
              </span>
            </p>

            <p style="margin: 0 0 12px;">
              <strong style="color: ${COLORS.accent};">
                Telefone
              </strong>
              <br />
              <span style="color: ${COLORS.text};">
                ${data.phone || "Não informado"}
              </span>
            </p>

            <p style="margin: 0;">
              <strong style="color: ${COLORS.accent};">
                Assunto
              </strong>
              <br />
              <span style="color: ${COLORS.text};">
                ${data.subject}
              </span>
            </p>
          </div>

          <div>
            <h2
              style="
                margin: 0 0 12px;
                font-size: 16px;
                color: ${COLORS.accent};
              "
            >
              Mensagem
            </h2>

            <div
              style="
                padding: 18px;
                background-color: ${COLORS.surface};
                border-left: 3px solid ${COLORS.accent};
                border-radius: 6px;
                color: ${COLORS.message};
                font-size: 15px;
                line-height: 1.7;
                white-space: pre-line;
              "
            >
              ${data.message}
            </div>
          </div>
        </div>

        <div
          style="
            padding: 18px 30px;
            border-top: 1px solid ${COLORS.border};
            text-align: center;
          "
        >
          <p
            style="
              margin: 0;
              font-size: 12px;
              color: ${COLORS.footer};
            "
          >
            Mensagem enviada através do formulário de contato do portfólio.
          </p>
        </div>
      </div>
    </div>
  `;

    return {
        subject,
        html,
    };
};

export { createContactEmail };
