'use client';
import React from 'react';
import { View, Pressable, Platform, ScrollView } from 'react-native';
import { Motion, createMotionAnimatedComponent, AnimatePresence, } from '@legendapp/motion';
import { createPopover } from '@gluestack-ui/popover';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext, useStyleContext, } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
const AnimatedPressable = createMotionAnimatedComponent(Pressable);
const SCOPE = 'POPOVER';
const ArrowWrapper = React.forwardRef(({ ...props }, ref) => {
    return <Motion.View {...props} ref={ref}/>;
});
const UIPopover = createPopover({
    Root: (Platform.OS === 'web'
        ? withStyleContext(View, SCOPE)
        : withStyleContextAndStates(View, SCOPE)),
    Arrow: Platform.OS === 'web' ? Motion.View : withStates(ArrowWrapper),
    Backdrop: AnimatedPressable,
    Body: ScrollView,
    CloseButton: Pressable,
    Content: Motion.View,
    Footer: View,
    Header: View,
    AnimatePresence: AnimatePresence,
});
cssInterop(UIPopover, { className: 'style' });
cssInterop(ArrowWrapper, { className: 'style' });
cssInterop(UIPopover.Content, { className: 'style' });
cssInterop(UIPopover.Header, { className: 'style' });
cssInterop(UIPopover.Footer, { className: 'style' });
cssInterop(UIPopover.Body, {
    className: 'style',
    contentContainerClassName: 'contentContainerStyle',
    indicatorClassName: 'indicatorStyle',
});
cssInterop(UIPopover.Backdrop, { className: 'style' });
cssInterop(UIPopover.CloseButton, { className: 'style' });
const popoverStyle = tva({
    base: 'group/popover w-full h-full justify-center items-center web:pointer-events-none',
    variants: {
        size: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            full: '',
        },
    },
});
const popoverArrowStyle = tva({
    base: 'bg-background-0 z-[1] border absolute overflow-hidden h-3.5 w-3.5 border-outline-100',
    variants: {
        placement: {
            'top left': 'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
            'top': 'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
            'top right': 'data-[flip=false]:border-t-transparent data-[flip=false]:border-l-transparent data-[flip=true]:border-b-transparent data-[flip=true]:border-r-transparent',
            'bottom': 'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
            'bottom left': 'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
            'bottom right': 'data-[flip=false]:border-b-transparent data-[flip=false]:border-r-transparent data-[flip=true]:border-t-transparent data-[flip=true]:border-l-transparent',
            'left': 'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
            'left top': 'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
            'left bottom': 'data-[flip=false]:border-l-transparent data-[flip=false]:border-b-transparent data-[flip=true]:border-r-transparent data-[flip=true]:border-t-transparent',
            'right': 'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
            'right top': 'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
            'right bottom': 'data-[flip=false]:border-r-transparent data-[flip=false]:border-t-transparent data-[flip=true]:border-l-transparent data-[flip=true]:border-b-transparent',
        },
    },
});
const popoverBackdropStyle = tva({
    base: 'absolute left-0 top-0 right-0 bottom-0 web:cursor-default',
});
const popoverCloseButtonStyle = tva({
    base: 'group/popover-close-button z-[1] rounded-sm data-[focus-visible=true]:web:bg-background-100 web:outline-0 web:cursor-pointer',
});
const popoverContentStyle = tva({
    base: 'bg-background-0 rounded-lg overflow-hidden border border-outline-100 w-full',
    parentVariants: {
        size: {
            xs: 'max-w-[360px] p-3.5',
            sm: 'max-w-[420px] p-4',
            md: 'max-w-[510px] p-[18px]',
            lg: 'max-w-[640px] p-5',
            full: 'p-6',
        },
    },
});
const popoverHeaderStyle = tva({
    base: 'flex-row justify-between items-center',
});
const popoverBodyStyle = tva({
    base: '',
});
const popoverFooterStyle = tva({
    base: 'flex-row justify-between items-center',
});
const Popover = React.forwardRef(({ className, size = 'md', placement = 'bottom', ...props }, ref) => {
    return (<UIPopover ref={ref} placement={placement} {...props} 
    // @ts-ignore
    className={popoverStyle({ size, class: className })} context={{ size, placement }} pointerEvents="box-none"/>);
});
const PopoverContent = React.forwardRef(({ className, size, ...props }, ref) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (<UIPopover.Content ref={ref} transition={{
            type: 'spring',
            damping: 18,
            stiffness: 250,
            mass: 0.9,
            opacity: {
                type: 'timing',
                duration: 50,
                delay: 50,
            },
        }} {...props} className={popoverContentStyle({
            parentVariants: {
                size: parentSize,
            },
            size,
            class: className,
        })} pointerEvents="auto"/>);
});
const PopoverArrow = React.forwardRef(({ className, ...props }, ref) => {
    const { placement } = useStyleContext(SCOPE);
    return (<UIPopover.Arrow ref={ref} transition={{
            type: 'spring',
            damping: 18,
            stiffness: 250,
            mass: 0.9,
            opacity: {
                type: 'timing',
                duration: 50,
                delay: 50,
            },
        }} {...props} className={popoverArrowStyle({
            class: className,
            placement,
        })}/>);
});
const PopoverBackdrop = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPopover.Backdrop ref={ref} {...props} initial={{
            opacity: 0,
        }} animate={{
            opacity: 0.1,
        }} exit={{
            opacity: 0,
        }} transition={{
            type: 'spring',
            damping: 18,
            stiffness: 450,
            mass: 0.9,
            opacity: {
                type: 'timing',
                duration: 50,
                delay: 50,
            },
        }} className={popoverBackdropStyle({
            class: className,
        })}/>);
});
const PopoverBody = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPopover.Body ref={ref} {...props} className={popoverBodyStyle({
            class: className,
        })}/>);
});
const PopoverCloseButton = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPopover.CloseButton ref={ref} {...props} className={popoverCloseButtonStyle({
            class: className,
        })}/>);
});
const PopoverFooter = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPopover.Footer ref={ref} {...props} className={popoverFooterStyle({
            class: className,
        })}/>);
});
const PopoverHeader = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPopover.Header ref={ref} {...props} className={popoverHeaderStyle({
            class: className,
        })}/>);
});
Popover.displayName = 'Popover';
PopoverArrow.displayName = 'PopoverArrow';
PopoverBackdrop.displayName = 'PopoverBackdrop';
PopoverContent.displayName = 'PopoverContent';
PopoverHeader.displayName = 'PopoverHeader';
PopoverFooter.displayName = 'PopoverFooter';
PopoverBody.displayName = 'PopoverBody';
PopoverCloseButton.displayName = 'PopoverCloseButton';
export { Popover, PopoverBackdrop, PopoverArrow, PopoverCloseButton, PopoverFooter, PopoverHeader, PopoverBody, PopoverContent, };
