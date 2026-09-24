import { memo } from 'preact/compat';
import type { Session } from '../state';
import { isGiven, isWrong } from '../state';

const NOTE_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function relation(selected: number | null, selectedValue: number, index: number, value: number) {
  if (selected === null) return '';
  if (index === selected) return 'selected';
  if (selectedValue !== 0 && value === selectedValue) return 'same';
  const sr = (selected / 9) | 0, sc = selected % 9;
  const r = (index / 9) | 0, c = index % 9;
  const sameBox = ((sr / 3) | 0) === ((r / 3) | 0) && ((sc / 3) | 0) === ((c / 3) | 0);
  return sr === r || sc === c || sameBox ? 'related' : '';
}

export function Board({
  session,
  onSelect,
  lastPlaced,
}: {
  session: Session;
  onSelect: (index: number) => void;
  lastPlaced: number | null;
}) {
  const { values, notes, selected } = session;
  const selectedValue = selected === null ? 0 : values[selected];
  const hinted = new Set(session.hinted);

  return (
    <div class="board" role="grid" aria-label="Sudoku board">
      {values.map((value, index) => {
        const row = (index / 9) | 0;
        const col = index % 9;
        const classes = [
          'cell',
          `r${row}`,
          `c${col}`,
          col % 3 === 2 && col !== 8 ? 'box-r' : '',
          row % 3 === 2 && row !== 8 ? 'box-b' : '',
          relation(selected, selectedValue, index, value),
          isGiven(session, index) ? 'given' : '',
          isWrong(session, index) ? 'wrong' : '',
          hinted.has(index) ? 'hinted' : '',
          lastPlaced === index ? 'pop' : '',
        ]
          .filter(Boolean)
          .join(' ');
        return (
          <Cell
            key={index}
            index={index}
            classes={classes}
            value={value}
            notes={notes[index]}
            highlight={selectedValue}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}

const Cell = memo(function Cell({
  index,
  classes,
  value,
  notes,
  highlight,
  onSelect,
}: {
  index: number;
  classes: string;
  value: number;
  notes: number;
  highlight: number;
  onSelect: (index: number) => void;
}) {
  const row = ((index / 9) | 0) + 1;
  const col = (index % 9) + 1;
  return (
    <button
      type="button"
      role="gridcell"
      class={classes}
      aria-label={`Row ${row}, column ${col}, ${value ? value : 'empty'}`}
      onPointerDown={(event) => {
        event.preventDefault();
        onSelect(index);
      }}
      onClick={() => onSelect(index)}
    >
      {value !== 0 ? (
        value
      ) : notes !== 0 ? (
        <span class="notes" aria-hidden="true">
          {NOTE_DIGITS.map((digit) => (
            <span key={digit} class={highlight === digit ? 'match' : ''}>
              {notes & (1 << digit) ? digit : ''}
            </span>
          ))}
        </span>
      ) : null}
    </button>
  );
});
