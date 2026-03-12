import type { UseFormReturn } from 'react-hook-form';

import { cn } from '@/utils/cn';

import type { PlayerCardBuilderFormValues } from '../types';

type PlayerCardBuilderFormProps = {
  form: UseFormReturn<PlayerCardBuilderFormValues>;
  uploadError?: string;
  onImageFileChange: (file?: File) => void;
};

const fieldClassName = 'rounded-xl border border-titanes-200 bg-white px-3 py-2 text-sm text-titanes-900 outline-none focus:border-titanes-500';

const PlayerCardBuilderForm = ({ form, uploadError, onImageFileChange }: PlayerCardBuilderFormProps) => {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <form className="grid gap-3 sm:grid-cols-2">
      <input placeholder="ID" className={cn(fieldClassName, errors.id && 'border-red-500')} {...register('id', { required: true })} />
      <input placeholder="Posición" className={cn(fieldClassName, errors.position && 'border-red-500')} {...register('position', { required: true })} />
      <input placeholder="Nombre" className={cn(fieldClassName, errors.name && 'border-red-500')} {...register('name', { required: true })} />
      <input placeholder="Apellido / Nickname" className={cn(fieldClassName, errors.nickname && 'border-red-500')} {...register('nickname', { required: true })} />
      <input placeholder={"Altura (ej: 6'1\")"} className={cn(fieldClassName, errors.height && 'border-red-500')} {...register('height', { required: true })} />
      <input placeholder="Peso (ej: 102 KG)" className={cn(fieldClassName, errors.weight && 'border-red-500')} {...register('weight', { required: true })} />
      <input placeholder="Velocidad (ej: 26 mps)" className={cn(fieldClassName, errors.speed && 'border-red-500')} {...register('speed', { required: true })} />
      <input placeholder="Año de nacimiento" className={cn(fieldClassName, errors.birthYear && 'border-red-500')} {...register('birthYear', { required: true })} />
      <input placeholder="Alcance (ej: 17 m)" className={cn(fieldClassName, errors.reach && 'border-red-500')} {...register('reach', { required: true })} />
      <input placeholder="Fuerza (ej: 80 KG)" className={cn(fieldClassName, errors.power && 'border-red-500')} {...register('power', { required: true })} />
      <input placeholder="Años en club" className={cn(fieldClassName, errors.yearsInTeam && 'border-red-500')} {...register('yearsInTeam', { required: true })} />
      <input placeholder="Nombre del club" className={cn(fieldClassName, errors.teamName && 'border-red-500')} {...register('teamName', { required: true })} />
      <input placeholder="URL de imagen" className={cn(fieldClassName, 'sm:col-span-2', errors.imageSrc && 'border-red-500')} {...register('imageSrc', { required: true })} />
      <label className="sm:col-span-2">
        <span className="mb-1 block text-xs font-semibold tracking-[0.12em] text-titanes-500 uppercase">Subir imagen</span>
        <input
          type="file"
          accept="image/*"
          className={cn(fieldClassName, 'w-full file:mr-3 file:rounded-md file:border-0 file:bg-titanes-700 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white')}
          onChange={(event) => onImageFileChange(event.target.files?.[0])}
        />
      </label>
      {uploadError ? <p className="sm:col-span-2 text-xs font-semibold text-red-600">{uploadError}</p> : null}
    </form>
  );
};

export default PlayerCardBuilderForm;
