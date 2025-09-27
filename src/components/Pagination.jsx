// components/Pagination.js
import { Button } from "react-bootstrap";

export function Pagination({ currentPage, lastPage, onPageChange }) {
  if (lastPage <= 1) return null; // لو صفحة واحدة متعرضش pagination

  return (
    <div className="d-flex justify-content-center gap-2 my-3">
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        السابق
      </Button>

      {Array.from({ length: lastPage }, (_, i) => (
        <Button
          key={i}
          variant={currentPage === i + 1 ? "primary" : "outline-primary"}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </Button>
      ))}

      <Button
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        التالي
      </Button>
    </div>
  );
}
