import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getAdminResource } from "../services/message.service";

export const AdminPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getAdminResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Admin Page
        </h1>
        <div className="content__body">
          <CodeSnippet title="Admin Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};