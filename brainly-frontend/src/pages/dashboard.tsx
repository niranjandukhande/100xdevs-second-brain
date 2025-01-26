import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContents } from "../hooks/useContents";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContents();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon size="large" />}
          ></Button>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon size="large" />}
          ></Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
