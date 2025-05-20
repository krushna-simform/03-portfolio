import { Experience as ExperienceProps } from "@/types/types";

export const Experience = ({
  company,
  city,
  description,
  role,
  from,
  to,
}: ExperienceProps) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <div className="space-y-2">
        <p className="text-2xl" role="heading">
          {role}
        </p>
        <div className="space-y-2">
          <p className="text-lg">{`${company}, ${city}`}</p>
          <p className="text-[16px] text-gray-600">{description}</p>
        </div>
      </div>
      <p className="text-lg">{`${from} - ${to}`}</p>
    </div>
  );
};
