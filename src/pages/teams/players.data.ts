import type { TeamPlayer } from './types';
import { desarrolloPlayers } from './desarrollo.data';
import { femeninoPlayers } from './femenino.data';
import { titanesPlayers } from './titanes.data';

export const basePlayers: TeamPlayer[] = [...titanesPlayers, ...femeninoPlayers, ...desarrolloPlayers];
