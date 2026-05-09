import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-badge')
export class LitBadge extends LitElement {
  static styles = css`
    :host {
      --badge-default-bg: #e2e8f0;
      --badge-default-color: #1a202c;
      --badge-primary-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --badge-success-bg: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      --badge-warning-bg: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      --badge-error-bg: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      --badge-info-bg: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .badge:hover {
      transform: scale(1.05);
    }

    /* Size variations */
    .small {
      padding: 4px 10px;
      font-size: 11px;
    }

    .medium {
      padding: 6px 14px;
      font-size: 12px;
    }

    .large {
      padding: 8px 18px;
      font-size: 14px;
    }

    /* Variant colors */
    .default {
      background: var(--badge-default-bg);
      color: var(--badge-default-color);
    }

    .primary {
      background: var(--badge-primary-bg);
      color: white;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .success {
      background: var(--badge-success-bg);
      color: white;
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    }

    .warning {
      background: var(--badge-warning-bg);
      color: white;
      box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
    }

    .error {
      background: var(--badge-error-bg);
      color: white;
      box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
    }

    .info {
      background: var(--badge-info-bg);
      color: white;
      box-shadow: 0 4px 15px rgba(48, 207, 208, 0.4);
    }
  `;

  @property({ type: String })
  variant:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info' = 'default';

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return html`
      <span class="badge ${this.variant} ${this.size}">
        <slot></slot>
      </span>
    `;
  }
}
