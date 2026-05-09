import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-modal')
export class LitModal extends LitElement {
  static styles = css`
    :host {
      --modal-bg: white;
      --modal-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      animation: fadeIn 0.3s ease;
    }

    .overlay.open {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal {
      background: var(--modal-bg);
      border-radius: 12px;
      box-shadow: var(--modal-shadow);
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow: auto;
      animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .modal-header {
      padding: 24px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #1a202c;
      margin: 0;
    }

    .modal-close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #718096;
      transition: color 0.2s ease;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-close:hover {
      color: #1a202c;
    }

    .modal-content {
      padding: 24px;
    }

    .modal-footer {
      padding: 16px 24px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

  @property({ type: Boolean })
  open = false;

  @property({ type: String })
  title = '';

  private handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private handleBackdropClick(e: Event) {
    if (e.target === e.currentTarget) {
      this.handleClose();
    }
  }

  render() {
    return html`
      <div
        class="overlay ${this.open ? 'open' : ''}"
        @click="${this.handleBackdropClick}"
      >
        <div class="modal">
          <div class="modal-header">
            <h2 class="modal-title">${this.title}</h2>
            <button class="modal-close" @click="${this.handleClose}">×</button>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
