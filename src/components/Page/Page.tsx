import React, { HTMLProps, ReactNode, forwardRef } from "react";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "" }, ref) => (
    <div ref={ref as any}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Page;
