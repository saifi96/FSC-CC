import { Select } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface IProps {
    title?: string
}


const data = [
    {
        name: '02:30 PM',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '03:00 PM',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '04:30 PM',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '05:30 PM',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '06:30 PM',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '07:30 PM',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }
];

const PriceChartComponent: FunctionComponent<IProps> = (props) => {

    return (
        <div className="bg-app-gray3 px-10 py-5 rounded-2xl">
            <div className="flex flex-row justify-between items-center mb-10">
                <div className="text-lg font-semibold">
                    {props.title}
                </div>
                <div>
                    <Select variant='outline' placeholder='15 min' size={'sm'} borderRadius={'full'}>
                        <option value={1}>{'20 min'}</option>
                    </Select>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    syncId="anyId"
                >
                    <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.1} />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="" />
                    <Tooltip />
                    <Area type="monotoneX" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PriceChartComponent;