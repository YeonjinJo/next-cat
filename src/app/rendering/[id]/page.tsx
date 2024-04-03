import ClientSideRendering from "@/components/rendering/ClientSideRendering";
import IncrementalSiteRegeneration from "@/components/rendering/IncrementalSiteRegeneration";
import ServerSideRendering from "@/components/rendering/ServerSideRendering";
import StaticSiteGeneration from "@/components/rendering/StaticSiteGeneration";
import React from "react";

const TestPage = ({ params }: { params: { id: string } }) => {
  {
    switch (params.id) {
      case "SSG":
        return <StaticSiteGeneration />;
      case "ISR":
        return <IncrementalSiteRegeneration />;
      case "SSR":
        return <ServerSideRendering />;
      case "CSR":
        return <ClientSideRendering />;
      default:
        return <></>;
    }
  }
};

export default TestPage;

