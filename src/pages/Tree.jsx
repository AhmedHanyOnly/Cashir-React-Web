import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaRegFileAlt,
} from "react-icons/fa";
import "../Style/tree.css";
import TreeData from "../ManualData/TreeData";

// Recursive Node Component
const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(node.open || false);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node">
      <div
        className={`tree-label ${open ? "open" : ""}`}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren ? (
          open ? (
            <FaChevronDown className="toggle-icon" />
          ) : (
            <FaChevronRight className="toggle-icon" />
          )
        ) : (
          <span className="toggle-placeholder" />
        )}

        {hasChildren ? (
          <FaFolder className="node-icon folder" />
        ) : (
          <FaRegFileAlt className="node-icon file" />
        )}

        <span>{node.label}</span>
      </div>

      {hasChildren && open && (
        <div className="tree-children">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// بدل ما تستقبل data كـ prop هتستخدم TreeData اللي استوردناه
export default function Tree() {
  return (
    <ListGroup className="account-tree">
      {TreeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </ListGroup>
  );
}
