import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <>
    <ContentLoader
      speed={3}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#e3e3e3"
      foregroundColor="#fafafa"
      {...props}
    >
      <rect x="41" y="14" rx="5" ry="5" width="227" height="144" />
      <rect x="27" y="189" rx="4" ry="4" width="257" height="20" />
      <rect x="84" y="230" rx="5" ry="5" width="146" height="43" />

    </ContentLoader>

  </>
)


export default Loader

