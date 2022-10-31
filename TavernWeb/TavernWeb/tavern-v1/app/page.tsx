'use client';

import Image from 'next/image';
import { useTavernColor } from '../helpers/hooks/useTavernColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Home() {
    const colorScheme = useTavernColor();

    const spacerDiv: JSX.Element = <div className="h-64" />;

    const onScroll = (e: EventTarget & HTMLDivElement) => {
        // check if the element is in view
        // if it is, remove the class "hidden"
        // else, add the class "hidden"
        console.log(
            ' starting scroll event',
            e.getBoundingClientRect().bottom <= window.innerHeight
        );
        if (e.getBoundingClientRect().bottom <= window.innerHeight) {
            e.classList.remove('hidden');
        } else {
            e.classList.add('hidden');
        }
    };

    return (
        <div
            className={`flex flex1 flex-col w-full h-full bg-vaporwave-normal-2 text-vaporwave-primary`}
        >
            {spacerDiv}
            <div className="flex flex1 flex-col w-full justify-center items-center">
                {/* the child paragraphs */}
                <div className="flex flex1 flex-col justify-center items-center">
                    <div
                        className="card hidden"
                        onScroll={(e) =>
                            onScroll(e.target as HTMLDivElement)
                        }
                    >
                        <p className="card-body-lg">
                            Welcome to the Tavern! Sit down, relax, and
                            find your adventuring party! Tavern, is a{' '}
                            <b
                                className={`text-vaporwave-secondary secondary-shine`}
                            >
                                Table Top Role Playing Game
                            </b>{' '}
                            group finder. We will facilitate all the
                            technical aspects of finding a group, so you
                            can focus on the fun!
                        </p>
                    </div>
                    {/* create a spacer for between the paragraphs */}
                    {spacerDiv}
                    <div
                        className="card tranfrom opacity-0 transition duration-500 ease-in-out hidden"
                        onScroll={(e) => onScroll(e.currentTarget)}
                    >
                        <p className="card-body-lg">
                            We welcome anyone who is interested in
                            learning how to play, or the experienced
                            player who is looking for a new group to
                            join. Whatever the case, Tavern is the place
                            for you! Our mission is to help you find
                            people to play with, go on awesome
                            adventures, and have a great time! We know
                            that finding people to play with can be
                            difficult, so we are here to help!
                        </p>
                    </div>
                    {spacerDiv}
                    <div className="card">
                        <p className="card-body-lg">
                            Remember we wish to foster a community of
                            players, so please be respectful of others.
                            No matter your race, gender, background, or
                            religion we want to make sure everyone feels
                            welcome. So please, remember the Tavern's
                            golden rule:{' '}
                            <b
                                className={`text-vaporwave-secondary secondary-shine`}
                            >
                                Be most excellent to each other!
                            </b>
                            . If you have any questions, please feel
                            free to contact us! We are always happy to
                            help and answer and clarify any questions
                            you may have. Remember we only play evil
                            characters, but we are all good people!
                        </p>
                    </div>
                    {spacerDiv}
                    <div className="card">
                        <p className="card-body-lg">
                            We are currently in{' '}
                            <b
                                className={`text-vaporwave-secondary secondary-shine`}
                            >
                                Alpha
                            </b>
                            , so please be patient with us as we work
                            out the kinks. That being said, we extremely
                            appreciate that you have decided to join us
                            on our jourey! Because of that if you sign
                            up before the end of the beta you will
                            recieve a lifetime premium membership... for
                            free. This means you will have access to
                            premium features all for supporting us! If
                            you have any questions, comments, or
                            concerns, please feel free to contact us at{' '}
                            <b
                                className={`text-vaporwave-secondary secondary-shine`}
                            >
                                help@mail.tavern-profile.xyz
                            </b>
                        </p>
                    </div>
                    {spacerDiv}
                    <div className="card">
                        <p className="card-body-lg">
                            We are also an open source project, with
                            hopes to becoming, a company to employ
                            talented developers. If you are interested
                            in helping us out, please feel free to
                            contact us at{' '}
                            <b
                                className={`text-vaporwave-secondary secondary-shine`}
                            >
                                development@mail.tavern-profile.xyz
                            </b>{' '}
                            or check out our github at{' '}
                            <a href="https://github.com/adamkali/Tavern">
                                <b
                                    className={`text-vaporwave-tertiary tertiary-shine`}
                                >
                                    Tavern's Github
                                </b>
                            </a>
                            {' .'}
                            we are always looking for new developers to
                            help us out! And if we like your work, and
                            we become profitable enough, we will hire
                            you!
                        </p>
                    </div>
                    {spacerDiv}
                    <div className="card">
                        <p className="card-body-lg">
                            Now go out there and find your party!
                        </p>
                        {/* add buttons to the left and right */}
                        <div className="flex flex1 flex-row mt-12 justify-center bottom-2 ">
                            <a
                                href="/welcome/login"
                                className="button0-lg hover:scale-125 transform transition duration-500 ease-in-out"
                            >
                                Login
                            </a>
                            <a
                                href="/welcome/signup"
                                className="button0-lg hover:scale-125 transform transition duration-500 ease-in-out"
                            >
                                <span>Sign Up</span>
                            </a>
                        </div>
                    </div>
                    {spacerDiv}
                    {spacerDiv}
                </div>
            </div>
        </div>
    );
}
