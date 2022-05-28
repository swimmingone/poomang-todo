import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedIdState, selectedTodoState } from './todoListState';
import { useCallback } from 'react';

const useTodoState = () => {
	const selectedTodo = useRecoilValue(selectedTodoState);
	const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

	const getTodoById = useCallback(
		(id: string) => {
			setSelectedId(id);
		},
		[setSelectedId],
	);

	return {
		selectedId,
		setSelectedId,
		selectedTodo,
		getTodoById,
	};
};

export default useTodoState;