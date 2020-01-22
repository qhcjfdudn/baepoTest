import React, { useState } from 'react';
import { View, Text, Button } from "react-native"
import { MainPage } from './modules/MainPage';
import { SecondTestPage } from './modules/secondtestpage';

export const Router: React.FC = () => {
  const [page, setPage] = useState(0);

  const rendering = page === 0 ? (
    <MainPage page={page} setPage={setPage} />
  ) : (
      <SecondTestPage page={page} setPage={setPage} />
    )

  return (
    <View>
      <Text>{page}</Text>
      {rendering}
    </View>
  )
}