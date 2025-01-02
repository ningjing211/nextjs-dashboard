export default function Video() {
    return (
          <div 
            className="w-full h-full"
            data-autoplay="true"
            data-loop="true"
            data-video-url="/ideas/everchanging-video-edited.webm"
            data-wf-ignore="true"
          > 
            <video
              className="w-full h-full"
              autoPlay
              data-wf-ignore="true"
              id="video-background"
              loop
              muted
              playsInline
            >
              <source
                src="/ideas/everchanging-video-edited.webm"
                data-wf-ignore="true"
                type="video/webm"
              />
            </video>
          </div>
    );
  }