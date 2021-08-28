import React, { useState } from 'react';

interface EventTypeProps {
  onSubmit: (form: { name: string; description: string }) => void;
};

interface EventUser {
  name: string;
  description?: string;
}

function EventType() {
  const [form, setForm] = useState<EventUser>({
    name: 'SYSNAR',
    description: 'is one of Developer'
  });

  const { name, description } = form;

  // onChange Event의 경우 아래와 같이 2가지 방법으로 이벤트 타입을 선언할 수 있다.
  // 1. typing on RIGHT hand side of =
  const onChange1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // type에 맞게 state 수정
    console.log(e.target.value);
  };

  // 2. typing on LEFT hand side of =
  const onChange2: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // type에 맞게 state 수정
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => {
    // 여기도 모르니까 any 로 하겠습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={onChange1} />
      <input name="description" onChange={onChange2} />
      <button type="submit">등록</button>
    </form>
  );
}

export default EventType;