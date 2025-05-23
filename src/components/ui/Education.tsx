import type { Education as EducationProps } from "@/types/types";

export const Education = ({
  course,
  institute,
  city,
  from,
  to,
}: EducationProps) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <div className="space-y-2">
        <p className="text-2xl" role="heading">
          {course}
        </p>
        <div>
          <p className="text-lg">{`${institute}, ${city}`}</p>
        </div>
      </div>
      <p className="text-lg">{`${from} - ${to}`}</p>
    </div>
  );
};
