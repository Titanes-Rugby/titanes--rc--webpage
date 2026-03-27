import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { buildPlayerCardFromValues, playerCardBuilderDefaults, playerCardPresets } from '../playerCardBuilder.config';
import type { PlayerCardBuilderFormValues } from '../types';
import { searchFromValues, valuesFromSearch } from '../utils/shareParams';

type ShareStatus = 'idle' | 'copied' | 'error';

export const usePlayerCardBuilderForm = () => {
	const form = useForm<PlayerCardBuilderFormValues>({
		defaultValues: playerCardBuilderDefaults,
		mode: 'onChange',
	});
	const { reset, setValue, watch } = form;
	const [uploadError, setUploadError] = useState<string>('');
	const [shareStatus, setShareStatus] = useState<ShareStatus>('idle');
	const initializedRef = useRef(false);
	const values = watch();
	const player = useMemo(() => buildPlayerCardFromValues(values), [values]);

	useEffect(() => {
		if (initializedRef.current) return;
		const fromSearch = valuesFromSearch(window.location.search);
		if (Object.keys(fromSearch).length) reset({ ...playerCardBuilderDefaults, ...fromSearch });
		initializedRef.current = true;
	}, [reset]);

	useEffect(() => {
		/* c8 ignore next */
		if (!initializedRef.current) return;
		const nextSearch = searchFromValues(values);
		const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}`;
		window.history.replaceState(null, '', nextUrl);
	}, [values]);

	const onImageFileChange = (file?: File) => {
		if (!file) return;
		if (!file.type.startsWith('image/')) {
			setUploadError('Selecciona un archivo de imagen válido.');
			return;
		}

		setUploadError('');
		const objectUrl = URL.createObjectURL(file);
		setValue('imageSrc', objectUrl, { shouldDirty: true, shouldValidate: true });
	};

	const onSelectPreset = (presetId: string) => {
		const preset = playerCardPresets.find((item) => item.id === presetId);
		if (!preset) return;
		reset(preset.values);
	};

	const copyShareLink = async () => {
		try {
			const nextSearch = searchFromValues(values);
			const url = `${window.location.origin}${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}`;
			await navigator.clipboard.writeText(url);
			setShareStatus('copied');
			window.setTimeout(() => setShareStatus('idle'), 1800);
		} catch {
			setShareStatus('error');
		}
	};

	return {
		...form,
		player,
		uploadError,
		shareStatus,
		onImageFileChange,
		onSelectPreset,
		copyShareLink,
		presets: playerCardPresets,
	};
};
