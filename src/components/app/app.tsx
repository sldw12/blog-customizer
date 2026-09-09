import { CSSProperties, useState } from 'react';

import {
	ArticleStateType,
	defaultArticleState,
} from '../../constants/articleProps';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';

import styles from './app.module.scss';

export const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const articleStyles = {
		'--font-family': articleState.fontFamilyOption.value,
		'--font-size': articleState.fontSizeOption.value,
		'--font-color': articleState.fontColor.value,
		'--container-width': articleState.contentWidth.value,
		'--bg-color': articleState.backgroundColor.value,
	} as CSSProperties;

	return (
		<main className={styles.main} style={articleStyles}>
			<ArticleParamsForm onApply={setArticleState} />
			<Article />
		</main>
	);
};
