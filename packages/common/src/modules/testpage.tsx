import * as React from 'react';
import { Text, View, Button } from 'react-native';

interface Props {
    page: number;
    setPage: any;
}

export const TestPage: React.FC<Props> = ({page, setPage}) => {
    const pagetitle = `page ${page}`
    return (
        <View>
            <Text>test page {page}</Text>
            <Button title={pagetitle} onPress={() => {
                setPage(page === 0 ? 1 : 0)
            }} />
        </View>
    )
}