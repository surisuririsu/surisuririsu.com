import Script from 'next/script'

export default function KofiWidget() {
  return (
    <>
      <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" />
      <Script id="kofi-widget">
        {`function drawWidget() {
            if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('surisuririsu', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#ffaacc',
                    'floating-chat.donateButton.text-color': '#fefefe',
                });
            } else {
                setTimeout(drawWidget, 100);
            }
        }
        drawWidget();`}
      </Script>
    </>
  )
}
