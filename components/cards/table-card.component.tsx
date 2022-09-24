import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {

}

const TableCardComponent: FunctionComponent<IProps> = (props) => {

    return (
        <div className="bg-app-gray2 rounded-2xl px-7 py-7">
            <div className="text-2xl font-semibold">
                Top Collections
            </div>
            <TableContainer border={'hidden'}>
                <Table variant='simple'>
                    <Thead textColor={'text-gray-300'}>
                        <Tr className="rounded-2xl">
                            <Th>Collection</Th>
                            <Th>Volume</Th>
                            <Th isNumeric>Floor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableCardComponent