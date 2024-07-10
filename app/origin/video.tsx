export default function Video() {
    return (
          <div className="w-full h-full"> 
            <video
              className="w-full h-full"
              autoPlay
              id="video-background"
              loop
              muted
            >
              <source
                src="/ideas/everchanging-video-edited.webm"
                type="video/webm"
              />
            </video>
          </div>
    );
  }