import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const Embedder = ({ source }) => {
  // if (!source) {
  //   return <div>Loading...</div>;
  // }

  // let encodedEmbedURL = encodeURIComponent(
  //   'https://docs.google.com/document/d/1wukTZxD-AaalhSqJC5UlWg4e1_wnsmr9hgpg942LNE4/edit?usp=sharing'
  // );
  // let embedURL = `https://docs.google.com/gview?url=${encodedEmbedURL}&embedded=true`;
  // const src = source;

  const docs = [
    { uri: require('../assets/finalEdition.pdf') },
    { uri: require('../assets/finalEdition.pdf') },
  ];

  return (
    // <div>
    //   <iframe
    //     src={embedURL}
    //     title="file"
    //     allowFullScreen={true}
    //     width="100%"
    //     height="680"
    //     className=""
    //   ></iframe>
    // </div>
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={docs}
      config={{
        header: {
          disableHeader: false,
          disableFileName: false,
          retainURLParams: false,
        },
      }}
      className="h-[100%] border-4 rounded-md  border-amber-500
      xp:h-[100%]"
    />
  );
};

export default Embedder;
