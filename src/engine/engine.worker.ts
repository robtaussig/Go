import { expose } from 'comlink';
import {
  WorkerInterface,
} from './types';
import {
  INITIAL_BOARD_SMALL
} from './constants';
import {
  findLegalMoves,
} from './board';
import {
  getBestMove as getBestMoveEval,
} from './eval';

const getValidMoves = (board = INITIAL_BOARD_SMALL, history: string[] = []) => {
  return findLegalMoves(board, history);
};

const getBestMove = (
  board: string,
  lastMove: number,
  history: string[],
  depth = 4,
): [number, number] => {
  return getBestMoveEval(board, lastMove, history, depth);
};

expose({
  getValidMoves,
  getBestMove,
} as WorkerInterface);
