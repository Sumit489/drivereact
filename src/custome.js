import React, { Component,useState } from 'react';
import GooglePicker,{MyCustomButton}  from 'react-google-picker';
import Drive from 'react-drive';
import DropboxChooser from 'react-dropbox-chooser'
// import copyDriveFilesToUserLib from './api/copyDriveFilesToUserLib';

class SaveDriveFilesToLibrary extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      files: [],
      loading: false
    };
  }
  
  handleEvent = (event, payload) => {
    if (event === 'START_REMOTE_PULL') {
      return void this.setState({ loading: true });
    }
    
    if (event === 'SELECTED_FILES') {
      console.log("Se;ected")
      console.log(payload.files)
      // const blobURL = URL.createObjectURL(payload?.files[0])
      // console.log(blobURL)
      this.setState({ files: payload.files });
    }
  } 
   handleSuccess(files){
      // setUrl(files[0].thumbnailLink)
      console.log(files)
    }
  
  render() {
    const { loading, files } = this.state;
    
    return (
      <div className="library-copy">
        {/* <Drive
          clientId="855917479448-7i4jrsh5965uocpq5k8004tt28cljqac.apps.googleusercontent.com"
          apiKey="AIzaSyBFJDtVOimyLSgjw9F7AQ9w0hJSRJBfGdc"
          exportAsBlobs="true"
          onEvent={this.handleEvent}
        >
          <button className="library-copy__select-btn">Select Drive Files</button>
        </Drive> */}
        {/* {loading && <div className="library-copy__loader" />} */}
        {/* {files.length && files.map(file => <p>{file.name}</p>)} */}
        <GooglePicker clientId={"769623589575-r1d5jelq1pmoro6odnvlk7u0jcu1b9av.apps.googleusercontent.com"}
              developerKey={'AIzaSyBf64zUupDObVcPMAyUPx0M8GOMEf_Z1bI'}
              scope={['https://www.googleapis.com/auth/drive.readonly']}
              onChange={data => console.log('on change:', data)}
              onAuthenticate={token => console.log('oauth token:', token)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg','application/pdf','video/webm','video/mp4','audio/mp3','audio/wav']}
              viewId={'DOCS'}>
            {/* <MyCustomButton /> */}
          </GooglePicker>

          {/* <DropboxChooser 
              appKey={'t4rulhkegn56mc9'}
              success={this.handleSuccess}
              cancel={() => console.log('closed')}
              multiselect={true}
              linkType={"direct"}
               >
              <div className="dropbox-button">Click me!</div>        
          </DropboxChooser> */}

      </div>
    );
  }
}

export default SaveDriveFilesToLibrary