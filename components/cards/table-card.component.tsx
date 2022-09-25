import { Avatar, Table, Stack, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaArtstation } from 'react-icons/fa';

interface IProps {

}

const TableCardComponent: FunctionComponent<IProps> = (props) => {
    return (
        <div className="bg-app-gray2 rounded-2xl px-7 pt-7 pb-5">
            <div className="text-xl font-semibold">
                Top Collections
            </div>
            <TableContainer>
                <Table variant='' __css={{ borderCollapse: 'separate', borderSpacing: '0px 10px' }} width={'100%'}>
                    <Thead>
                        <Tr textColor={'gray.500'} fontSize={12} textTransform={'uppercase'}>
                            <Td>Collection</Td>
                            <Td>Volume</Td>
                            <Td>Floor</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr backgroundColor={'app-gray3'}>
                            <Td borderLeftRadius={10} marginBottom={5}>
                                <Stack direction={'row'} align={'start'} alignItems='center'>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={'sm'} className='mr-2' />
                                    <span className="text-gray-50 font-semibold">inches</span>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                            <Td borderRightRadius={10} isNumeric>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                        </Tr>
                        <Tr backgroundColor={'app-gray3'}>
                            <Td borderLeftRadius={10} marginBottom={5}>
                                <Stack direction={'row'} align={'start'} alignItems='center'>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={'sm'} className='mr-2' />
                                    <span className="text-gray-50 font-semibold">inches</span>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                            <Td borderRightRadius={10} isNumeric>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                        </Tr>
                        <Tr backgroundColor={'app-gray3'}>
                            <Td borderLeftRadius={10} marginBottom={5}>
                                <Stack direction={'row'} align={'start'} alignItems='center'>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={'sm'} className='mr-2' />
                                    <span className="text-gray-50 font-semibold">inches</span>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                            <Td borderRightRadius={10} isNumeric>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <FaArtstation />
                                    <span>412.22</span>
                                </Stack>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableCardComponent