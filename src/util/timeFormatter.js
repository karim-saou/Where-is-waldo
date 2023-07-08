export const timeFormatter = (time) => {
  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const timeFormat = `${hours}:${minutes.toString().padStart(2, '0')}:
  ${seconds.toString().padStart(2, '0')}:
  ${milliseconds.toString().padStart(2, '0')}`;

  return timeFormat;
};
