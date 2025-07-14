declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Page view
export const pageview = (url: string) => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url
  });
};

// Custom event
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
