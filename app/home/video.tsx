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
                src="https://media-us-westslateappcom.s3.us-west-1.amazonaws.com/madcowfilms/production/clips/514ebae1-ebbb-4477-addd-d52a30cd28c1-1280x720.2500.webm"
                type="video/webm"
              />
            </video>
          </div>
    );
  }