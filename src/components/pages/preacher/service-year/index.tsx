import { useEffect, useRef, useState } from "react";
import { useTheme } from "react-jss";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import Surface from "@/components/surface";

const mockData = [
  { month: "Sep 2021", preacher: 400, regular: 60, auxiliar: 300 },
  { month: "Oct 2021", preacher: 420, regular: 30, auxiliar: 324 },
  { month: "Nov 2021", preacher: 450, regular: 50, auxiliar: 300 },
  { month: "Dec 2021", preacher: 400, regular: 60, auxiliar: 300 },
  { month: "Jan 2022", preacher: 420, regular: 30, auxiliar: 324 },
  { month: "Feb 2022", preacher: 300, regular: 50, auxiliar: 300 },
  { month: "Mar 2022", preacher: 200, regular: 60, auxiliar: 300 },
  { month: "Apr 2022", preacher: 420, regular: 30, auxiliar: 324 },
  { month: "May 2022", preacher: 100, regular: 50, auxiliar: 300 },
  { month: "Jun 2022", preacher: 400, regular: 60, auxiliar: 300 },
  { month: "Jul 2022", preacher: 420, regular: 30, auxiliar: 324 },
  { month: "Aug 2022", preacher: 450, regular: 50, auxiliar: 300 },
];

const ServiceYear = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme<Jss.Theme>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervale = setInterval(() => {
      setWidth(ref.current ? ref.current.offsetWidth : 0);
    }, 500);

    return () => clearInterval(intervale);
  }, [ref.current]);

  return (
    <Surface title="Ora nandritran'ny taom-panompoana 2022">
      <div ref={ref}>
        <BarChart
          width={width}
          height={200}
          data={mockData}
          margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <Bar
            legendType="circle"
            dataKey="preacher"
            fill={theme.colors.primary}
            radius={[4, 4, 4, 4]}
          />

          <XAxis dataKey="month" tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            width={40}
          />
        </BarChart>
      </div>
    </Surface>
  );
};

export default ServiceYear;
