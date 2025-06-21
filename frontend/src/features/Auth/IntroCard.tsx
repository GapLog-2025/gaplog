import { Stack, Avatar } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import React from 'react';

interface Props {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

// Title 컴포넌트
interface TitleProps {
  children?: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <div className="text-4xl font-bold text-black">{children}</div>;
}

// Description 컴포넌트
interface DescriptionProps {
  children: React.ReactNode;
}

function Description({ children }: DescriptionProps) {
  return (
    <Stack spacing={1}>
      {React.Children.map(children, (child, index) => (
        <p key={index} className="text-gray-600 text-base leading-relaxed">
          {child}
        </p>
      ))}
    </Stack>
  );
}

// IntroCard
export default function IntroCard({ sx, children }: Props) {
  const titleElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Title,
  );

  const descriptionElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Description,
  );

  return (
    <Stack sx={sx} alignItems="flex-end">
      <Stack alignItems="flex-start" className="max-w-[290px]">
        <Stack direction="row" gap={1} alignItems="center">
          <Avatar
            alt="gaplog 로고"
            src="./public/gaplog_icon.png"
            className="w-90"
          />
          <p className="text-black font-bold text-lg">갭로그</p>
        </Stack>
        {titleElement}
        {descriptionElement}
      </Stack>
    </Stack>
  );
}

IntroCard.Title = Title;
IntroCard.Description = Description;
