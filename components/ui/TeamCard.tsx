'use client'

import { useState } from 'react';
import TeamDialog from '@/components/ui/TeamDialog'

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
	stream: string;
	label: string;
  desc: string;
	socials: { platform: string; url: string }[];
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      {/* Team Member Card */}
      <div
				className="cursor-pointer rounded-md m-2"
				onClick={openDialog}
				style={{ width: '255px' }} // Limit card width to the image
			>
				<div className="relative">
					<img
						src={member.image}
						alt={member.name}
						className="w-[255px] h-[255px] object-cover rounded-md border-4 border-transparent hover:border-yellow-400 transition duration-500"
					/>
				</div>
				<div className="mt-2">
					<h3 className="text-lg font-semibold">{member.name}</h3>
					<p className="text-sm text-gray-500">{member.position}</p>
				</div>
			</div>

      {/* Dialog Card */}
      {isDialogOpen && TeamDialog({member, closeDialog})}
    </>
  );
}