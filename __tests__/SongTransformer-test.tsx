import 'react-native';
import React from 'react';
import { Text } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SongTransformer from '../app/components/SongTransformer';

it('renders correctly', () => {
  let chordProSong = `
{title: Let it be}
{artist: The Beatles}
{soc}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be big[Cm]word
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
{eoc}

{comment: Intro [C] [D]}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of w[G]isdom, let it [F]be [C/E]      [Dm]     [C] 
{sot}
C|---
E|---
{eot}
`
  const tree = renderer.create(
    <SongTransformer
      chordProSong={chordProSong}
      transposeDelta={0}
      children={(songProps) => <Text>{songProps.htmlSong}</Text>} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('hide tabs', () => {
  let chordProSong = `
{title: Let it be}
{artist: The Beatles}
{soc}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be big[Cm]word
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
{eoc}

{comment: Intro [C] [D]}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
{sot}
C|---
E|---
{eot}
[C]Whisper words of w[G]isdom, let it [F]be [C/E]      [Dm]     [C] 
{sot}
C|---
E|---
{eot}`
  const tree = renderer.create(
    <SongTransformer
      chordProSong={chordProSong}
      transposeDelta={0}
      showTabs={false}
      children={(songProps) => <Text>{songProps.htmlSong}</Text>} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('hide tabs with different line breaking formats', () => {
  let chordProSong = `
{sot}E|---{eot}
{sot}
C|---
E|---{eot}
{sot}
C|---
E|---
{eot}{sot}
C|---
E|---
{eot}`
  const tree = renderer.create(
    <SongTransformer
      chordProSong={chordProSong}
      transposeDelta={0}
      showTabs={false}
      children={(songProps) => <Text>{songProps.htmlSong}</Text>} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})