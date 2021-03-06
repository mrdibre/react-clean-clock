import { useEffect, useState } from "react";

import { Hours } from "presentation/components/Hours";
import { InputModel } from "domain/models/input/input";
import { ReportHours } from "domain/usecases/report/report-hours";

interface WorkedHoursProps {
  inputs: InputModel[];
  reportWorkedHours: ReportHours;
}

const WorkedHours = ({ inputs, reportWorkedHours }: WorkedHoursProps) => {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (inputs.length) {
      reportWorkedHours.report(inputs).then((hours) => {
        setHours(hours);
      });
    }
  }, [inputs, reportWorkedHours]);

  return <Hours ms={hours} label="Horas Trabalhadas" />;
};

export { WorkedHours };
